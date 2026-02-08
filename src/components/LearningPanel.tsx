import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BarChart3, BookOpen, Flame, Loader2, Lock, Search, Shield, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/AuthContext';
import { useLearningData } from '@/hooks/useLearningData';

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
    conceptProgress,
    ensureModuleLoaded,
    ensureAllModulesLoaded,
  } = useLearningData(user?.id);

  const [selectedModuleId, setSelectedModuleId] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [loadingAll, setLoadingAll] = useState(false);

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

  const handleSelectModule = (moduleId: string) => {
    setSelectedModuleId(moduleId);
    if (typeof window !== 'undefined') {
      localStorage.setItem(SELECTED_MODULE_KEY, moduleId);
    }
  };

  const completedExerciseIds = useMemo(
    () =>
      new Set(
        Object.values(progressByExercise)
          .filter(item => item.total_correct > 0)
          .map(item => item.exercise_id)
      ),
    [progressByExercise]
  );

  const lessonProgress = useMemo(() => {
    if (!module) return [];

    const moduleLessons = lessons
      .filter(lesson => lesson.module_id === module.id)
      .sort((a, b) => a.order - b.order);

    const completionByLesson = new Map<string, boolean>();

    const progressRows = moduleLessons.map(lesson => {
      const lessonExercises = exercises.filter(ex => ex.lesson_id === lesson.id);
      const completed = lessonExercises.filter(ex => completedExerciseIds.has(ex.id)).length;
      const total = lessonExercises.length;
      const percent = total ? Math.round((completed / total) * 100) : 0;
      const fullyCompleted = total > 0 && completed >= total;

      completionByLesson.set(lesson.id, fullyCompleted);

      return {
        lesson,
        completed,
        total,
        percent,
        fullyCompleted,
      };
    });

    return progressRows.map(row => {
      const prerequisites = row.lesson.prerequisites ?? [];
      const blockedBy = prerequisites.filter(prereqId => !completionByLesson.get(prereqId));
      return {
        ...row,
        prerequisites,
        blockedBy,
        unlocked: blockedBy.length === 0,
      };
    });
  }, [completedExerciseIds, exercises, lessons, module]);

  const moduleProgress = useMemo(() => {
    const total = lessonProgress.reduce((acc, item) => acc + item.total, 0);
    const completed = lessonProgress.reduce((acc, item) => acc + item.completed, 0);
    return {
      total,
      completed,
      percent: total ? Math.round((completed / total) * 100) : 0,
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

  const nextLessonId =
    lessonProgress.find(item => item.unlocked && item.completed < item.total)?.lesson.id ??
    lessonProgress.find(item => item.unlocked)?.lesson.id ??
    null;

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

  if (loading || !module) return null;

  return (
    <div className="glass-card p-6 mb-6">
      <div className="mb-4">
        <div className="text-xs uppercase tracking-wide text-muted-foreground mb-2">Trilhas</div>
        <div className="flex flex-wrap gap-2">
          {sortedModules.map(item => {
            const isActive = item.id === module.id;
            return (
              <Button
                key={item.id}
                variant={isActive ? 'default' : 'secondary'}
                onClick={() => handleSelectModule(item.id)}
                className={isActive ? 'gradient-primary glow-primary' : ''}
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
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Carregando
              </>
            ) : (
              'Carregar tudo'
            )}
          </Button>
        </div>
      </div>

      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <h3 className="text-lg font-bold">{module.title}</h3>
          <p className="text-sm text-muted-foreground">{module.description}</p>
          {!moduleLoaded && (
            <p className="text-xs text-warning mt-1">Carregando conteúdo deste módulo...</p>
          )}
        </div>
        <span className="px-3 py-1 rounded-full text-xs bg-muted/60 text-muted-foreground">
          {languageLabel(module.language)}
        </span>
      </div>

      <div className="mb-4">
        <div className="flex justify-between text-xs text-muted-foreground mb-2">
          <span>Progresso do módulo</span>
          <span>{moduleProgress.percent}%</span>
        </div>
        <div className="progress-bar h-3" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={moduleProgress.percent}>
          <div className="progress-fill" style={{ width: `${moduleProgress.percent}%` }} />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3 mb-4">
        <div className="flex flex-col items-center p-2 rounded-lg bg-muted/50">
          <Zap className="w-4 h-4 text-xp mb-1" />
          <span className="text-lg font-bold">{stats?.xp ?? 0}</span>
          <span className="text-xs text-muted-foreground">XP</span>
        </div>
        <div className="flex flex-col items-center p-2 rounded-lg bg-muted/50">
          <Flame className="w-4 h-4 text-warning mb-1" />
          <span className="text-lg font-bold">{stats?.streak_days ?? 0}</span>
          <span className="text-xs text-muted-foreground">Streak</span>
        </div>
        <div className="flex flex-col items-center p-2 rounded-lg bg-muted/50">
          <Shield className="w-4 h-4 text-success mb-1" />
          <span className="text-xs font-semibold text-foreground">
            {protectionAvailable ? 'Disponível' : 'Usada'}
          </span>
          <span className="text-xs text-muted-foreground">Proteção</span>
        </div>
      </div>

      {weakConcepts.length > 0 && (
        <div className="mb-4 glass-card p-3">
          <div className="flex items-center gap-2 text-sm font-semibold mb-2">
            <BarChart3 className="w-4 h-4" />
            Pontos para reforçar
          </div>
          <div className="space-y-2">
            {weakConcepts.map(item => {
              const completion = item.total ? Math.round((item.completed / item.total) * 100) : 0;
              const accuracy = Math.round(item.accuracy * 100);
              const conceptLabel = conceptLabelById.get(item.concept) ?? item.concept;
              return (
                <div key={item.concept} className="flex items-center justify-between text-xs">
                  <span className="font-medium text-foreground">{conceptLabel}</span>
                  <span className="text-muted-foreground">
                    {completion}% concluído | {accuracy}% acerto | {item.due} devidos
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      <div className="flex flex-col gap-3">
        <Button
          onClick={() => nextLessonId && navigate(`/lesson/${nextLessonId}`)}
          className="h-12 gradient-primary glow-primary font-semibold"
          disabled={!nextLessonId || !moduleLoaded}
          aria-label="Continuar para a próxima lição"
        >
          Continuar trilha
        </Button>
        {dueExercises.length > 0 && (
          <Button variant="secondary" onClick={() => navigate('/review')} className="h-12">
            Revisão rápida ({dueExercises.length})
          </Button>
        )}
      </div>

      {!user && (
        <div className="mt-4 glass-card p-3 text-sm text-muted-foreground">
          Entre ou crie uma conta para salvar seu progresso e streak.
          <div className="flex gap-2 mt-3">
            <Button variant="secondary" size="sm" onClick={() => navigate('/login')}>
              Entrar
            </Button>
            <Button variant="secondary" size="sm" onClick={() => navigate('/signup')}>
              Criar conta
            </Button>
          </div>
        </div>
      )}

      <div className="mt-6 space-y-2">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-sm font-semibold">
            <BookOpen className="w-4 h-4" />
            Lições do módulo
          </div>
          <div className="relative w-full max-w-[240px]">
            <label htmlFor="lesson-search" className="sr-only">
              Buscar lições
            </label>
            <Search className="w-4 h-4 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              id="lesson-search"
              value={searchTerm}
              onChange={event => setSearchTerm(event.target.value)}
              placeholder="Buscar lição"
              className="w-full bg-muted/60 border border-border rounded-lg pl-9 pr-3 py-2 text-xs outline-none focus:ring-2 focus:ring-primary/40"
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
              className={`w-full text-left glass-card p-3 transition-all ${
                locked
                  ? 'opacity-65 cursor-not-allowed border-border/30'
                  : 'hover:border-primary/40'
              }`}
              disabled={locked}
              aria-label={locked ? `Lição bloqueada: ${item.lesson.title}` : `Abrir lição ${item.lesson.title}`}
            >
              <div className="flex items-center justify-between text-sm gap-2">
                <span className="font-semibold flex items-center gap-2">
                  {locked && <Lock className="w-4 h-4 text-warning" />}
                  {item.lesson.title}
                </span>
                <span className="text-xs text-muted-foreground">
                  {item.completed}/{item.total}
                </span>
              </div>
              <div className="mt-2 progress-bar h-2">
                <div className="progress-fill" style={{ width: `${item.percent}%` }} />
              </div>
              {locked && item.blockedBy.length > 0 && (
                <p className="text-[11px] text-warning mt-2">
                  Complete a lição anterior para desbloquear.
                </p>
              )}
            </button>
          );
        })}

        {filteredLessons.length === 0 && (
          <div className="glass-card p-3 text-xs text-muted-foreground text-center">
            Nenhuma lição encontrada para "{searchTerm}".
          </div>
        )}
      </div>
    </div>
  );
}
