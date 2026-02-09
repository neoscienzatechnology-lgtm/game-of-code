import { BookOpenCheck, Eye, Info, Lightbulb, Lock, Rocket, Sparkles, Target } from 'lucide-react';
import { type ReactNode, useEffect, useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { LearningExerciseSession } from '@/components/LearningExerciseSession';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/AuthContext';
import { useLearningData } from '@/hooks/useLearningData';
import { getLessonVisual } from '@/lib/lessonVisuals';
import {
  LESSON_MASTERY_THRESHOLD,
  buildMasteredLessonMap,
  mergeMasteredLessonIds,
} from '@/lib/learningMastery';

type TheorySection = {
  id: string;
  label: string;
  content: string;
};

const normalizeForMatch = (value: string) =>
  value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim();

const LABEL_PATTERN = /\b(Objetivo|Fato-chave|Fato chave|Exemplo de uso|Uso comum|Dica prática|Dica pratica|Importante|Atenção|Atencao|Veja um exemplo completo aplicado|O que observar)\s*:/gi;

const normalizeSectionLabel = (raw: string) => {
  const normalized = normalizeForMatch(raw);
  if (normalized === 'objetivo') return 'Objetivo';
  if (normalized === 'fato-chave' || normalized === 'fato chave') return 'Fato-chave';
  if (normalized === 'exemplo de uso') return 'Exemplo de uso';
  if (normalized === 'uso comum') return 'Uso comum';
  if (normalized === 'dica pratica') return 'Dica prática';
  if (normalized === 'importante') return 'Importante';
  if (normalized === 'atencao') return 'Atenção';
  if (normalized === 'veja um exemplo completo aplicado') return 'Exemplo completo';
  if (normalized === 'o que observar') return 'O que observar';
  return raw;
};

const parseTheorySections = (content: string): TheorySection[] => {
  const cleanContent = content.replace(/\s+/g, ' ').trim();
  if (!cleanContent) return [];

  const matcher = new RegExp(LABEL_PATTERN.source, 'gi');
  const matches = [...cleanContent.matchAll(matcher)];
  if (!matches.length) {
    return [{ id: 'teoria-geral', label: 'Visão geral', content: cleanContent }];
  }

  const sections: TheorySection[] = [];
  const firstIndex = matches[0].index ?? 0;

  if (firstIndex > 0) {
    const intro = cleanContent.slice(0, firstIndex).trim();
    if (intro) {
      sections.push({
        id: 'teoria-contexto',
        label: 'Contexto',
        content: intro,
      });
    }
  }

  matches.forEach((match, index) => {
    const start = match.index ?? 0;
    const nextStart = matches[index + 1]?.index ?? cleanContent.length;
    const contentStart = start + match[0].length;
    const sectionContent = cleanContent.slice(contentStart, nextStart).trim();
    if (!sectionContent) return;

    sections.push({
      id: `teoria-${index}-${normalizeSectionLabel(match[1]).toLowerCase().replace(/\s+/g, '-')}`,
      label: normalizeSectionLabel(match[1]),
      content: sectionContent,
    });
  });

  return sections;
};

const EMPHASIS_PATTERN =
  /(<[^>\n]+>|@[a-z-]+|aria-[a-z-]+|--[a-z0-9-]+|`[^`]+`|\b(?:HTML|CSS|JS|JavaScript|DOM|SEO|API|URL|GET|POST|UTF-8|ARIA|WWW|href|src|class|id|name|method|action|required|placeholder|defer|async|transition|box-shadow|viewport|charset|var\(\)|@keyframes)\b)/gi;

const renderWithHighlights = (text: string) => {
  const matcher = new RegExp(EMPHASIS_PATTERN.source, 'gi');
  const nodes: ReactNode[] = [];
  let cursor = 0;

  for (const match of text.matchAll(matcher)) {
    const start = match.index ?? 0;
    const matched = match[0];

    if (start > cursor) {
      nodes.push(text.slice(cursor, start));
    }

    nodes.push(
      <strong
        key={`hl-${start}-${matched}`}
        className="rounded bg-primary/20 px-1 py-0.5 font-semibold text-primary"
      >
        {matched}
      </strong>
    );

    cursor = start + matched.length;
  }

  if (cursor < text.length) {
    nodes.push(text.slice(cursor));
  }

  return nodes;
};

const getSectionMeta = (label: string) => {
  const key = normalizeForMatch(label);

  if (key === 'objetivo') {
    return {
      icon: Target,
      accentClass: 'border-primary/40 bg-primary/8',
      chipClass: 'border-primary/40 bg-primary/15 text-primary',
    };
  }

  if (key === 'dica pratica') {
    return {
      icon: Lightbulb,
      accentClass: 'border-warning/35 bg-warning/8',
      chipClass: 'border-warning/35 bg-warning/15 text-warning',
    };
  }

  if (key === 'fato-chave' || key === 'fato chave' || key === 'importante') {
    return {
      icon: Info,
      accentClass: 'border-primary-alt/35 bg-primary-alt/8',
      chipClass: 'border-primary-alt/35 bg-primary-alt/15 text-cyan-300',
    };
  }

  if (key === 'o que observar') {
    return {
      icon: Eye,
      accentClass: 'border-success/35 bg-success/8',
      chipClass: 'border-success/35 bg-success/15 text-success',
    };
  }

  return {
    icon: Sparkles,
    accentClass: 'border-border/60 bg-muted/20',
    chipClass: 'border-border/60 bg-muted/35 text-muted-foreground',
  };
};

export default function Lesson() {
  const { lessonId } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const {
    loading,
    lessons,
    exercises,
    progressByExercise,
    moduleDiagnostics,
    ensureAllModulesLoaded,
    recordAttempt,
  } = useLearningData(user?.id);
  const [stage, setStage] = useState<'intro' | 'exercises' | 'complete'>('intro');
  const [loadedAll, setLoadedAll] = useState(false);

  const lesson = useMemo(
    () => lessons.find(item => item.id === lessonId) ?? null,
    [lessons, lessonId]
  );

  const lessonExercises = useMemo(
    () => exercises.filter(exercise => exercise.lesson_id === lessonId),
    [exercises, lessonId]
  );

  const lessonVisual = useMemo(() => (lesson ? getLessonVisual(lesson) : null), [lesson]);

  const theorySections = useMemo(() => (lesson ? parseTheorySections(lesson.content) : []), [lesson]);

  const masteredLessonIds = useMemo(() => {
    if (!lesson) return new Set<string>();

    const moduleLessons = lessons.filter(item => item.module_id === lesson.module_id);
    const masteryMap = buildMasteredLessonMap(
      moduleLessons,
      exercises,
      progressByExercise,
      LESSON_MASTERY_THRESHOLD
    );
    const diagnostic = moduleDiagnostics[lesson.module_id];

    return mergeMasteredLessonIds(masteryMap, diagnostic?.mastered_lesson_ids ?? []);
  }, [exercises, lesson, lessons, moduleDiagnostics, progressByExercise]);

  const lessonUnlocked = useMemo(() => {
    if (!lesson) return true;
    const prerequisites = lesson.prerequisites ?? [];
    return prerequisites.every(prereq => masteredLessonIds.has(prereq));
  }, [lesson, masteredLessonIds]);

  const currentLessonAccuracy = useMemo(() => {
    if (!lesson) return 0;
    const lessonExercises = exercises.filter(exercise => exercise.lesson_id === lesson.id);
    let totalCorrect = 0;
    let totalWrong = 0;

    for (const exercise of lessonExercises) {
      const progress = progressByExercise[exercise.id];
      if (!progress) continue;
      totalCorrect += progress.total_correct;
      totalWrong += progress.total_wrong ?? (progress.last_result === 'wrong' ? 1 : 0);
    }

    const attempts = totalCorrect + totalWrong;
    return attempts > 0 ? totalCorrect / attempts : 0;
  }, [exercises, lesson, progressByExercise]);

  const currentLessonMastered = useMemo(() => {
    if (!lesson) return false;
    return masteredLessonIds.has(lesson.id);
  }, [lesson, masteredLessonIds]);

  useEffect(() => {
    if (loading || !lessonId || lesson || loadedAll) return;
    void ensureAllModulesLoaded().then(() => setLoadedAll(true));
  }, [ensureAllModulesLoaded, lesson, lessonId, loadedAll, loading]);

  if (loading) {
    return (
      <div className="page-shell flex items-center justify-center">
        <div className="glass-card p-6 text-muted-foreground">Carregando lição...</div>
      </div>
    );
  }

  if (!lesson) {
    return (
      <div className="page-shell flex items-center justify-center">
        <div className="glass-card max-w-lg space-y-4 p-8 text-center">
          <h1 className="text-2xl font-bold">Lição não encontrada</h1>
          <p className="text-muted-foreground">Verifique o link e tente novamente.</p>
          <Button onClick={() => navigate('/')}>Voltar ao início</Button>
        </div>
      </div>
    );
  }

  if (!lessonUnlocked) {
    return (
      <div className="page-shell flex items-center justify-center">
        <div className="glass-card max-w-lg space-y-4 p-8 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-warning/20">
            <Lock className="h-6 w-6 text-warning" />
          </div>
          <h1 className="text-2xl font-bold">Lição bloqueada</h1>
          <p className="text-muted-foreground">
            Esta lição possui pré-requisitos. Conclua as lições anteriores com domínio mínimo de{' '}
            {Math.round(LESSON_MASTERY_THRESHOLD * 100)}% para desbloquear.
          </p>
          <Button onClick={() => navigate('/')}>Voltar ao início</Button>
        </div>
      </div>
    );
  }

  if (stage === 'complete') {
    return (
      <div className="page-shell flex items-center justify-center">
        <div className="glass-card max-w-xl space-y-4 p-8 text-center">
          <div className="hero-kicker mx-auto mb-1 w-fit">
            <BookOpenCheck className="mr-2 h-3.5 w-3.5" />
            Missão concluída
          </div>
          <h1 className="text-2xl font-bold">Lição concluída!</h1>
          <p className="text-muted-foreground">
            Você finalizou <strong className="text-foreground">{lesson.title}</strong>. Continue para manter o ritmo.
          </p>
          <p className="text-xs text-muted-foreground">
            Acurácia atual: {Math.round(currentLessonAccuracy * 100)}% (mínimo para avanço:{' '}
            {Math.round(LESSON_MASTERY_THRESHOLD * 100)}%).
          </p>
          {!currentLessonMastered && (
            <Button variant="secondary" onClick={() => setStage('exercises')}>
              Reforçar esta lição
            </Button>
          )}
          <Button onClick={() => navigate('/')} className="gradient-primary text-primary-foreground">
            Voltar ao início
          </Button>
        </div>
      </div>
    );
  }

  if (stage === 'intro') {
    return (
      <div className="page-shell flex items-center justify-center">
        <div className="glass-card max-w-2xl space-y-5 p-8">
          <div className="hero-kicker w-fit">
            <Sparkles className="mr-2 h-3.5 w-3.5" />
            Microlição (15-60s)
          </div>
          {lessonVisual && (
            <figure className="overflow-hidden rounded-xl border border-border/60 bg-card/70">
              <img
                src={lessonVisual.src}
                alt={lessonVisual.alt}
                loading="lazy"
                className="h-auto w-full object-cover"
              />
              <figcaption className="border-t border-border/50 px-3 py-2 text-xs text-muted-foreground">
                {lessonVisual.caption}
              </figcaption>
            </figure>
          )}
          <h1 className="text-2xl font-bold md:text-3xl">{lesson.title}</h1>

          <div className="space-y-3">
            {theorySections.map(section => {
              const meta = getSectionMeta(section.label);
              const Icon = meta.icon;

              return (
                <article key={section.id} className={`rounded-xl border p-4 ${meta.accentClass}`}>
                  <div className="mb-2 flex items-center gap-2">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] ${meta.chipClass}`}
                    >
                      <Icon className="h-3.5 w-3.5" />
                      {section.label}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-foreground/90 md:text-base">
                    {renderWithHighlights(section.content)}
                  </p>
                </article>
              );
            })}
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <Button
              onClick={() => setStage('exercises')}
              className="gradient-primary h-12 font-semibold text-primary-foreground glow-primary"
            >
              <Rocket className="mr-2 h-4 w-4" />
              Iniciar exercícios
            </Button>
            <Button variant="secondary" onClick={() => navigate('/')} className="h-12">
              Voltar ao início
            </Button>
          </div>
        </div>
      </div>
    );
  }

  if (!lessonExercises.length) {
    return (
      <div className="page-shell flex items-center justify-center">
        <div className="glass-card max-w-lg space-y-4 p-8 text-center">
          <h1 className="text-2xl font-bold">Sem exercícios</h1>
          <p className="text-muted-foreground">
            Esta lição ainda não possui exercícios configurados.
          </p>
          <Button onClick={() => navigate('/')}>Voltar ao início</Button>
        </div>
      </div>
    );
  }

  return (
    <LearningExerciseSession
      exercises={lessonExercises}
      onExit={() => navigate('/')}
      onComplete={() => setStage('complete')}
      onAttempt={(exercise, correct) =>
        recordAttempt({ exerciseId: exercise.id, correct, concept: lesson.concept })
      }
      getConceptForExercise={() => lesson.title}
      getLessonContext={() => ({ title: lesson.title, content: lesson.content })}
    />
  );
}
