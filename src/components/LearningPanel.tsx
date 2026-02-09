import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  BarChart3,
  BookOpen,
  ClipboardCheck,
  Flame,
  Loader2,
  Lock,
  Search,
  Shield,
  Target,
  Trophy,
  Zap,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/AuthContext';
import { useLearningData } from '@/hooks/useLearningData';
import { LESSON_MASTERY_THRESHOLD, buildMasteredLessonMap, mergeMasteredLessonIds } from '@/lib/learningMastery';

const SELECTED_MODULE_KEY = 'learning-selected-module';

const daysBetween = (a: Date, b: Date) => {
  const utcA = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utcB = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
  return Math.floor((utcA - utcB) / (1000 * 60 * 60 * 24));
};

const languageLabel = (language: string) => {
  const normalized = (language || '').toLowerCase();
  if (normalized === 'javascript') return 'JS';
  if (normalized === 'typescript') return 'TS';
  if (normalized === 'html') return 'HTML';
  if (normalized === 'css') return 'CSS';
  return normalized.toUpperCase() || 'MOD';
};

export function LearningPanel() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const {
    loading,
    modules,
    lessons,
    exercises,
    loadedModules,
    progressByExercise,
    stats,
    dueExercises,
    weeklyProgress,
    leaderboard,
    conceptProgress,
    moduleDiagnostics,
    moduleProjectStatus,
    ensureModuleLoaded,
    ensureAllModulesLoaded,
    updateWeeklyGoal,
  } = useLearningData(user?.id);

  const [selectedModuleId, setSelectedModuleId] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [loadingAll, setLoadingAll] = useState(false);
  const [weeklyGoalInput, setWeeklyGoalInput] = useState('');

  const sortedModules = useMemo(
    () => [...modules].sort((a, b) => a.order - b.order),
    [modules]
  );

  useEffect(() => {
    if (!sortedModules.length) {
      setSelectedModuleId(null);
      return;
    }

    const saved =
      typeof window !== 'undefined' ? localStorage.getItem(SELECTED_MODULE_KEY) : null;
    const savedIsValid = saved && sortedModules.some(module => module.id === saved);
    const defaultModuleId = (savedIsValid ? saved : sortedModules[0].id) ?? sortedModules[0].id;

    setSelectedModuleId(current => {
      if (current && sortedModules.some(module => module.id === current)) {
        return current;
      }
      return defaultModuleId;
    });
  }, [sortedModules]);

  const module = useMemo(() => {
    if (!sortedModules.length) return null;
    if (!selectedModuleId) return sortedModules[0];
    return sortedModules.find(item => item.id === selectedModuleId) ?? sortedModules[0];
  }, [sortedModules, selectedModuleId]);

  useEffect(() => {
    if (!module) return;
    if (loadedModules.includes(module.id)) return;
    void ensureModuleLoaded(module.id);
  }, [ensureModuleLoaded, loadedModules, module]);

  useEffect(() => {
    if (!weeklyProgress) return;
    setWeeklyGoalInput(String(weeklyProgress.goalXp));
  }, [weeklyProgress]);

  const handleSelectModule = (moduleId: string) => {
    setSelectedModuleId(moduleId);
    if (typeof window !== 'undefined') {
      localStorage.setItem(SELECTED_MODULE_KEY, moduleId);
    }
  };

  const diagnostic = module ? moduleDiagnostics[module.id] : null;

  const lessonProgress = useMemo(() => {
    if (!module) return [];

    const moduleLessons = lessons
      .filter(lesson => lesson.module_id === module.id)
      .sort((a, b) => a.order - b.order);

    const masteryMap = buildMasteredLessonMap(
      moduleLessons,
      exercises,
      progressByExercise,
      LESSON_MASTERY_THRESHOLD
    );
    const masteredLessonIds = mergeMasteredLessonIds(
      masteryMap,
      diagnostic?.mastered_lesson_ids ?? []
    );

    const rows = moduleLessons.map(lesson => {
      const mastery = masteryMap.get(lesson.id);
      const completed = mastery?.completed ?? 0;
      const total = mastery?.total ?? 0;
      const percent = total ? Math.round((completed / total) * 100) : 0;
      const accuracy = Math.round((mastery?.accuracy ?? 0) * 100);
      const mastered = masteredLessonIds.has(lesson.id);
      const prerequisites = lesson.prerequisites ?? [];
      const blockedBy = prerequisites.filter(prereqId => !masteredLessonIds.has(prereqId));

      return {
        lesson,
        completed,
        total,
        percent,
        accuracy,
        mastered,
        prerequisites,
        blockedBy,
        unlocked: blockedBy.length === 0,
      };
    });

    return rows;
  }, [diagnostic?.mastered_lesson_ids, exercises, lessons, module, progressByExercise]);

  const moduleProgress = useMemo(() => {
    const total = lessonProgress.reduce((acc, item) => acc + item.total, 0);
    const completed = lessonProgress.reduce((acc, item) => acc + item.completed, 0);
    return {
      total,
      completed,
      percent: total ? Math.round((completed / total) * 100) : 0,
    };
  }, [lessonProgress]);

  const moduleMastery = useMemo(() => {
    const totalLessons = lessonProgress.length;
    const masteredLessons = lessonProgress.filter(item => item.mastered).length;
    return {
      totalLessons,
      masteredLessons,
      percent: totalLessons ? Math.round((masteredLessons / totalLessons) * 100) : 0,
    };
  }, [lessonProgress]);

  const filteredLessons = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();
    if (!normalizedSearch) return lessonProgress;

    return lessonProgress.filter(item => {
      const haystack = [
        item.lesson.title,
        item.lesson.concept,
        item.lesson.content,
        ...(item.lesson.tags ?? []),
      ]
        .join(' ')
        .toLowerCase();

      return haystack.includes(normalizedSearch);
    });
  }, [lessonProgress, searchTerm]);

  const nextLessonId = useMemo(() => {
    const recommended = diagnostic?.recommended_lesson_id;
    if (recommended) {
      const row = lessonProgress.find(item => item.lesson.id === recommended);
      if (row && row.unlocked && !row.mastered) return row.lesson.id;
    }

    return (
      lessonProgress.find(item => item.unlocked && !item.mastered)?.lesson.id ??
      lessonProgress.find(item => item.unlocked)?.lesson.id ??
      null
    );
  }, [diagnostic?.recommended_lesson_id, lessonProgress]);

  const protectionAvailable = useMemo(() => {
    if (!stats?.protection_used_at) return true;
    const last = new Date(stats.protection_used_at);
    return daysBetween(new Date(), last) >= 7;
  }, [stats?.protection_used_at]);

  const weakConcepts = useMemo(() => {
    if (!module) return [];

    const moduleConcepts = new Set(
      lessons.filter(lesson => lesson.module_id === module.id).map(lesson => lesson.concept)
    );

    return conceptProgress
      .filter(item => moduleConcepts.has(item.concept))
      .sort((a, b) => {
        const aCompletion = a.total ? a.completed / a.total : 0;
        const bCompletion = b.total ? b.completed / b.total : 0;
        if (aCompletion !== bCompletion) return aCompletion - bCompletion;
        if (a.accuracy !== b.accuracy) return a.accuracy - b.accuracy;
        return b.due - a.due;
      })
      .slice(0, 4);
  }, [conceptProgress, lessons, module]);

  const conceptLabelById = useMemo(() => {
    const labels = new Map<string, string>();
    for (const lesson of lessons) {
      if (!labels.has(lesson.concept)) {
        labels.set(lesson.concept, lesson.title);
      }
    }
    return labels;
  }, [lessons]);

  const moduleLoaded = module ? loadedModules.includes(module.id) : false;
  const projectStatus = module
    ? moduleProjectStatus[module.id] ?? { submitted: false, score: 0, submittedAt: null }
    : { submitted: false, score: 0, submittedAt: null };
  const diagnosticScorePercent = diagnostic ? Math.round(diagnostic.score * 100) : null;

  if (loading || !module) return null;

  return (
    <div className="glass-card mb-6 animate-slide-up p-5 md:p-6">
      <div className="mb-5 flex items-start justify-between gap-4">
        <div>
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary/95">
            Trilhas ativas
          </p>
          <h2 className="text-2xl font-bold">{module.title}</h2>
          <p className="mt-1 text-sm text-muted-foreground">{module.description}</p>
          {!moduleLoaded && (
            <p className="mt-2 text-xs text-warning">Carregando conteúdo deste módulo...</p>
          )}
        </div>
        <span className="rounded-full border border-border/60 bg-muted/35 px-3 py-1 text-xs font-semibold text-muted-foreground">
          {languageLabel(module.language)}
        </span>
      </div>

      <div className="mb-5">
        <div className="mb-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
          Trocar trilha
        </div>
        <div className="flex gap-2 overflow-x-auto pb-1">
          {sortedModules.map(item => {
            const isActive = item.id === module.id;
            return (
              <Button
                key={item.id}
                variant={isActive ? 'default' : 'secondary'}
                onClick={() => handleSelectModule(item.id)}
                className={`shrink-0 ${
                  isActive
                    ? 'gradient-primary text-primary-foreground shadow-[0_16px_32px_-18px_hsl(var(--primary)/0.9)]'
                    : 'bg-secondary/80 text-secondary-foreground'
                }`}
                size="sm"
                aria-pressed={isActive}
                aria-label={`Selecionar trilha ${item.title}`}
              >
                {item.title}
              </Button>
            );
          })}

          <Button
            variant="secondary"
            size="sm"
            className="shrink-0"
            disabled={loadingAll}
            onClick={async () => {
              setLoadingAll(true);
              await ensureAllModulesLoaded();
              setLoadingAll(false);
            }}
            aria-label="Carregar todos os módulos"
          >
            {loadingAll ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Carregando
              </>
            ) : (
              'Carregar tudo'
            )}
          </Button>
        </div>
      </div>

      <div className="mb-5 grid gap-3 md:grid-cols-[1.35fr_1fr]">
        <div className="glass-card p-4">
          <div className="mb-2 flex items-center justify-between text-xs text-muted-foreground">
            <span>Progresso do módulo</span>
            <span className="font-semibold text-foreground">{moduleProgress.percent}%</span>
          </div>
          <div
            className="progress-bar h-3"
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={moduleProgress.percent}
          >
            <div className="progress-fill" style={{ width: `${moduleProgress.percent}%` }} />
          </div>
          <p className="mt-2 text-[11px] text-muted-foreground">
            {moduleProgress.completed} de {moduleProgress.total} exercícios concluídos
          </p>

          <div className="mb-2 mt-4 flex items-center justify-between text-xs text-muted-foreground">
            <span>Domínio da trilha (mín. {Math.round(LESSON_MASTERY_THRESHOLD * 100)}%)</span>
            <span className="font-semibold text-foreground">{moduleMastery.percent}%</span>
          </div>
          <div
            className="progress-bar h-2.5"
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={moduleMastery.percent}
          >
            <div className="progress-fill" style={{ width: `${moduleMastery.percent}%` }} />
          </div>
          <p className="mt-2 text-[11px] text-muted-foreground">
            {moduleMastery.masteredLessons} de {moduleMastery.totalLessons} lições com domínio validado
          </p>
        </div>

        <div className="grid grid-cols-3 gap-2">
          <div className="stat-tile">
            <Zap className="mx-auto mb-1 h-4 w-4 text-xp" />
            <span className="stat-value">{stats?.xp ?? 0}</span>
            <span className="block text-[11px] text-muted-foreground">XP</span>
          </div>
          <div className="stat-tile">
            <Flame className="mx-auto mb-1 h-4 w-4 text-warning" />
            <span className="stat-value">{stats?.streak_days ?? 0}</span>
            <span className="block text-[11px] text-muted-foreground">Streak</span>
          </div>
          <div className="stat-tile">
            <Shield className="mx-auto mb-1 h-4 w-4 text-success" />
            <span className="text-xs font-semibold text-foreground">
              {protectionAvailable ? 'Disponível' : 'Usada'}
            </span>
            <span className="block text-[11px] text-muted-foreground">Proteção</span>
          </div>
        </div>
      </div>

      <div className="mb-5 grid gap-3 md:grid-cols-2">
        <div className="glass-card p-4">
          <div className="mb-2 flex items-center gap-2 text-sm font-semibold">
            <Target className="h-4 w-4 text-primary" />
            Diagnóstico inicial
          </div>
          {diagnostic ? (
            <p className="text-xs text-muted-foreground">
              Último resultado: <strong className="text-foreground">{diagnosticScorePercent}%</strong>. Recomendação salva para acelerar a trilha.
            </p>
          ) : (
            <p className="text-xs text-muted-foreground">
              Faça o diagnóstico para pular conteúdos já dominados e focar nos pontos fracos.
            </p>
          )}
          <Button
            variant="secondary"
            className="mt-3 w-full"
            onClick={() => navigate(`/diagnostic/${module.id}`)}
          >
            {diagnostic ? 'Refazer diagnóstico' : 'Iniciar diagnóstico'}
          </Button>
        </div>

        <div className="glass-card p-4">
          <div className="mb-2 flex items-center gap-2 text-sm font-semibold">
            <ClipboardCheck className="h-4 w-4 text-primary" />
            Projeto final do módulo
          </div>
          <p className="text-xs text-muted-foreground">
            {projectStatus.submitted
              ? `Projeto salvo com ${projectStatus.score} pontos.`
              : 'Checklist prático para consolidar o módulo com critérios objetivos.'}
          </p>
          <Button
            variant="secondary"
            className="mt-3 w-full"
            onClick={() => navigate(`/project/${module.id}`)}
          >
            {projectStatus.submitted ? 'Atualizar projeto' : 'Abrir projeto final'}
          </Button>
        </div>
      </div>

      {weeklyProgress && (
        <div className="glass-card mb-5 p-4">
          <div className="mb-3 flex items-center gap-2 text-sm font-semibold">
            <Trophy className="h-4 w-4 text-xp" />
            Meta semanal e ranking
          </div>

          <div className="mb-2 flex items-center justify-between text-xs text-muted-foreground">
            <span>Semana iniciada em {weeklyProgress.weekKey}</span>
            <span className="font-semibold text-foreground">{weeklyProgress.percent}%</span>
          </div>
          <div className="progress-bar h-2.5">
            <div className="progress-fill" style={{ width: `${weeklyProgress.percent}%` }} />
          </div>
          <p className="mt-2 text-[11px] text-muted-foreground">
            {weeklyProgress.earnedXp} / {weeklyProgress.goalXp} XP (faltam {weeklyProgress.remainingXp} XP)
          </p>

          <div className="mt-3 grid gap-2 sm:grid-cols-[1fr_auto]">
            <input
              value={weeklyGoalInput}
              onChange={event => setWeeklyGoalInput(event.target.value)}
              className="w-full rounded-xl border border-border bg-muted/35 px-3 py-2 text-sm outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/30"
              placeholder="Meta semanal de XP"
              inputMode="numeric"
            />
            <Button
              variant="secondary"
              onClick={() => {
                const parsedGoal = Number(weeklyGoalInput.replace(/[^0-9]/g, ''));
                if (!Number.isFinite(parsedGoal) || parsedGoal <= 0) return;
                updateWeeklyGoal(parsedGoal);
              }}
            >
              Salvar meta
            </Button>
          </div>

          {leaderboard.length > 0 && (
            <div className="mt-3 space-y-2">
              {leaderboard.map((entry, index) => (
                <div
                  key={`${entry.userId}-${index}`}
                  className="flex items-center justify-between rounded-lg border border-border/50 bg-muted/25 px-3 py-2 text-xs"
                >
                  <span className="font-semibold text-foreground">#{index + 1} {entry.label}</span>
                  <span className="text-xp">{entry.xp} XP</span>
                </div>
              ))}
            </div>
          )}

          <Button
            variant="secondary"
            className="mt-3 w-full"
            onClick={() => navigate('/admin')}
          >
            Abrir painel do professor
          </Button>
        </div>
      )}

      {weakConcepts.length > 0 && (
        <div className="glass-card mb-5 p-4">
          <div className="mb-3 flex items-center gap-2 text-sm font-semibold">
            <BarChart3 className="h-4 w-4 text-primary" />
            Pontos para reforçar
          </div>
          <div className="space-y-2">
            {weakConcepts.map(item => {
              const completion = item.total ? Math.round((item.completed / item.total) * 100) : 0;
              const accuracy = Math.round(item.accuracy * 100);
              const conceptLabel = conceptLabelById.get(item.concept) ?? item.concept;
              return (
                <div
                  key={item.concept}
                  className="flex items-center justify-between gap-2 rounded-lg border border-border/50 bg-muted/25 px-2.5 py-2 text-xs"
                >
                  <span className="font-semibold text-foreground">{conceptLabel}</span>
                  <span className="text-muted-foreground">
                    {completion}% concluído | {accuracy}% acerto | {item.due} devidos
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      <div className="mb-5 flex flex-col gap-3">
        <Button
          onClick={() => nextLessonId && navigate(`/lesson/${nextLessonId}`)}
          className="gradient-primary h-12 font-semibold text-primary-foreground glow-primary"
          disabled={!nextLessonId || !moduleLoaded}
          aria-label="Continuar para a próxima lição"
        >
          Continuar trilha
        </Button>
        {dueExercises.length > 0 && (
          <Button variant="secondary" onClick={() => navigate('/review')} className="h-12">
            Revisão diária ({dueExercises.length})
          </Button>
        )}
      </div>

      {!user && (
        <div className="glass-card mb-5 p-4 text-sm text-muted-foreground">
          Entre ou crie uma conta para salvar progresso, XP e sequência de estudos.
          <div className="mt-3 flex gap-2">
            <Button variant="secondary" size="sm" onClick={() => navigate('/login')}>
              Entrar
            </Button>
            <Button variant="secondary" size="sm" onClick={() => navigate('/signup')}>
              Criar conta
            </Button>
          </div>
        </div>
      )}

      <div className="space-y-3">
        <div className="flex items-center justify-between gap-2">
          <div className="section-title flex items-center gap-2">
            <BookOpen className="h-4 w-4 text-primary" />
            Lições do módulo
          </div>
          <div className="relative w-full max-w-[250px]">
            <label htmlFor="lesson-search" className="sr-only">
              Buscar lições
            </label>
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              id="lesson-search"
              value={searchTerm}
              onChange={event => setSearchTerm(event.target.value)}
              placeholder="Buscar lição"
              className="w-full rounded-xl border border-border bg-muted/40 py-2 pl-9 pr-3 text-xs outline-none transition-all focus:border-primary/60 focus:ring-2 focus:ring-primary/35"
              aria-label="Buscar lições por título ou conceito"
            />
          </div>
        </div>

        {filteredLessons.map(item => {
          const locked = !item.unlocked;
          return (
            <button
              key={item.lesson.id}
              onClick={() => !locked && navigate(`/lesson/${item.lesson.id}`)}
              className={`w-full rounded-xl border p-3 text-left transition-all ${
                locked
                  ? 'cursor-not-allowed border-border/45 bg-muted/25 opacity-70'
                  : 'border-border/60 bg-card/55 hover:-translate-y-0.5 hover:border-primary/45'
              }`}
              disabled={locked}
              aria-label={locked ? `Lição bloqueada: ${item.lesson.title}` : `Abrir lição ${item.lesson.title}`}
            >
              <div className="flex items-center justify-between gap-2 text-sm">
                <span className="flex items-center gap-2 font-semibold">
                  {locked && <Lock className="h-4 w-4 text-warning" />}
                  {item.lesson.title}
                </span>
                <span className="text-xs text-muted-foreground">
                  {item.completed}/{item.total} | acerto {item.accuracy}%
                </span>
              </div>
              <div className="progress-bar mt-2 h-2">
                <div className="progress-fill" style={{ width: `${item.percent}%` }} />
              </div>
              <p className="mt-2 text-[11px] text-muted-foreground">
                {item.mastered
                  ? 'Domínio validado para esta lição.'
                  : `Necessário domínio mínimo de ${Math.round(LESSON_MASTERY_THRESHOLD * 100)}% para avançar.`}
              </p>
              {locked && item.blockedBy.length > 0 && (
                <p className="mt-1 text-[11px] text-warning">
                  Complete os pré-requisitos com domínio mínimo para desbloquear.
                </p>
              )}
            </button>
          );
        })}

        {filteredLessons.length === 0 && (
          <div className="glass-card p-3 text-center text-xs text-muted-foreground">
            Nenhuma lição encontrada para "{searchTerm}".
          </div>
        )}
      </div>
    </div>
  );
}
