import { BookOpenCheck, Lock, Rocket, Sparkles } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { LearningExerciseSession } from '@/components/LearningExerciseSession';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/AuthContext';
import { useLearningData } from '@/hooks/useLearningData';

export default function Lesson() {
  const { lessonId } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const {
    loading,
    lessons,
    exercises,
    progressByExercise,
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

  const completedExerciseIds = useMemo(
    () =>
      new Set(
        Object.values(progressByExercise)
          .filter(item => item.total_correct > 0)
          .map(item => item.exercise_id)
      ),
    [progressByExercise]
  );

  const completedLessonIds = useMemo(() => {
    return new Set(
      lessons
        .filter(item => {
          const lessonExercisesForItem = exercises.filter(exercise => exercise.lesson_id === item.id);
          if (lessonExercisesForItem.length === 0) return false;
          return lessonExercisesForItem.every(exercise => completedExerciseIds.has(exercise.id));
        })
        .map(item => item.id)
    );
  }, [completedExerciseIds, exercises, lessons]);

  const lessonUnlocked = useMemo(() => {
    if (!lesson) return true;
    const prerequisites = lesson.prerequisites ?? [];
    return prerequisites.every(prereq => completedLessonIds.has(prereq));
  }, [completedLessonIds, lesson]);

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
            Esta lição possui pré-requisitos. Conclua as lições anteriores para desbloquear.
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
          <h1 className="text-2xl font-bold md:text-3xl">{lesson.title}</h1>
          <p className="leading-relaxed text-muted-foreground">{lesson.content}</p>

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
    />
  );
}
