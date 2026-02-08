import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Flame, Shield, Zap } from 'lucide-react';
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
  const { loading, modules, lessons, exercises, progressByExercise, stats, dueExercises } =
    useLearningData(user?.id);

  const [selectedModuleId, setSelectedModuleId] = useState<string | null>(null);

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

  const handleSelectModule = (moduleId: string) => {
    setSelectedModuleId(moduleId);
    if (typeof window !== 'undefined') {
      localStorage.setItem(SELECTED_MODULE_KEY, moduleId);
    }
  };

  const lessonProgress = useMemo(() => {
    if (!module) return [];

    const completedIds = new Set(
      Object.values(progressByExercise)
        .filter(item => item.total_correct > 0)
        .map(item => item.exercise_id)
    );

    return lessons
      .filter(lesson => lesson.module_id === module.id)
      .sort((a, b) => a.order - b.order)
      .map(lesson => {
        const lessonExercises = exercises.filter(ex => ex.lesson_id === lesson.id);
        const completed = lessonExercises.filter(ex => completedIds.has(ex.id)).length;
        const total = lessonExercises.length;
        const percent = total ? Math.round((completed / total) * 100) : 0;
        return { lesson, completed, total, percent };
      });
  }, [exercises, lessons, module, progressByExercise]);

  const moduleProgress = useMemo(() => {
    const total = lessonProgress.reduce((acc, item) => acc + item.total, 0);
    const completed = lessonProgress.reduce((acc, item) => acc + item.completed, 0);
    return {
      total,
      completed,
      percent: total ? Math.round((completed / total) * 100) : 0,
    };
  }, [lessonProgress]);

  const nextLessonId =
    lessonProgress.find(item => item.completed < item.total)?.lesson.id ??
    lessonProgress[0]?.lesson.id ??
    null;

  const protectionAvailable = useMemo(() => {
    if (!stats?.protection_used_at) return true;
    const last = new Date(stats.protection_used_at);
    return daysBetween(new Date(), last) >= 7;
  }, [stats?.protection_used_at]);

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
              >
                {item.title}
              </Button>
            );
          })}
        </div>
      </div>

      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <h3 className="text-lg font-bold">{module.title}</h3>
          <p className="text-sm text-muted-foreground">{module.description}</p>
        </div>
        <span className="px-3 py-1 rounded-full text-xs bg-muted/60 text-muted-foreground">
          {languageLabel(module.language)}
        </span>
      </div>

      <div className="mb-4">
        <div className="flex justify-between text-xs text-muted-foreground mb-2">
          <span>Progresso do modulo</span>
          <span>{moduleProgress.percent}%</span>
        </div>
        <div className="progress-bar h-3">
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
            {protectionAvailable ? 'Disponivel' : 'Usada'}
          </span>
          <span className="text-xs text-muted-foreground">Protecao</span>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <Button
          onClick={() => nextLessonId && navigate(`/lesson/${nextLessonId}`)}
          className="h-12 gradient-primary glow-primary font-semibold"
          disabled={!nextLessonId}
        >
          Continuar trilha
        </Button>
        {dueExercises.length > 0 && (
          <Button variant="secondary" onClick={() => navigate('/review')} className="h-12">
            Revisao rapida ({dueExercises.length})
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
        <div className="flex items-center gap-2 text-sm font-semibold">
          <BookOpen className="w-4 h-4" />
          Licoes do modulo
        </div>
        {lessonProgress.map(item => (
          <button
            key={item.lesson.id}
            onClick={() => navigate(`/lesson/${item.lesson.id}`)}
            className="w-full text-left glass-card p-3 hover:border-primary/40 transition-all"
          >
            <div className="flex items-center justify-between text-sm">
              <span className="font-semibold">{item.lesson.title}</span>
              <span className="text-xs text-muted-foreground">
                {item.completed}/{item.total}
              </span>
            </div>
            <div className="mt-2 progress-bar h-2">
              <div className="progress-fill" style={{ width: `${item.percent}%` }} />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
