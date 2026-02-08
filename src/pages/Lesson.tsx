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
      <div className="min-h-screen flex items-center justify-center text-muted-foreground">
        Carregando lição...
      </div>
    );
  }

  if (!lesson) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-2xl font-bold mb-2">Lição não encontrada</h1>
        <p className="text-muted-foreground mb-6">Verifique o link e tente novamente.</p>
        <Button onClick={() => navigate('/')}>Voltar ao início</Button>
      </div>
    );
  }

  if (!lessonUnlocked) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="glass-card p-8 max-w-lg text-center space-y-4">
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
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="glass-card p-8 max-w-lg text-center space-y-4">
          <h1 className="text-2xl font-bold">Lição concluída!</h1>
          <p className="text-muted-foreground">
            Você finalizou {lesson.title}. Continue para manter o ritmo.
          </p>
          <Button onClick={() => navigate('/')}>Voltar ao início</Button>
        </div>
      </div>
    );
  }

  if (stage === 'intro') {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="glass-card p-8 max-w-lg space-y-4">
          <div className="text-xs uppercase tracking-wide text-muted-foreground">
            Microlição (15-60s)
          </div>
          <h1 className="text-2xl font-bold">{lesson.title}</h1>
          <p className="text-muted-foreground text-sm leading-relaxed">{lesson.content}</p>
          <Button
            onClick={() => setStage('exercises')}
            className="w-full h-12 gradient-primary glow-primary font-semibold"
          >
            Iniciar exercícios
          </Button>
          <Button variant="secondary" onClick={() => navigate('/')} className="w-full h-12">
            Voltar ao início
          </Button>
        </div>
      </div>
    );
  }

  if (!lessonExercises.length) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="glass-card p-8 max-w-lg text-center space-y-4">
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
