import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { LearningExerciseSession } from '@/components/LearningExerciseSession';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/AuthContext';
import { useLearningData } from '@/hooks/useLearningData';

export default function Review() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { loading, lessons, exercises, dueExercises, recordAttempt } = useLearningData(user?.id);

  const conceptByLesson = useMemo(() => {
    return lessons.reduce<Record<string, string>>((acc, lesson) => {
      acc[lesson.id] = lesson.concept;
      return acc;
    }, {});
  }, [lessons]);

  const conceptForExercise = (exerciseId: string) => {
    const exercise = exercises.find(item => item.id === exerciseId);
    if (!exercise) return undefined;
    return conceptByLesson[exercise.lesson_id];
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-muted-foreground">
        Carregando revisões...
      </div>
    );
  }

  if (!dueExercises.length) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="glass-card p-8 max-w-lg text-center space-y-4">
          <h1 className="text-2xl font-bold">Sem revisões pendentes</h1>
          <p className="text-muted-foreground">
            Você está em dia. Continue estudando para liberar novas revisões.
          </p>
          <Button onClick={() => navigate('/')}>Voltar ao início</Button>
        </div>
      </div>
    );
  }

  return (
    <LearningExerciseSession
      exercises={dueExercises}
      onExit={() => navigate('/')}
      onComplete={() => navigate('/')}
      onAttempt={(exercise, correct) =>
        recordAttempt({
          exerciseId: exercise.id,
          correct,
          concept: conceptForExercise(exercise.id) ?? 'revisão',
        })
      }
      getConceptForExercise={conceptForExercise}
    />
  );
}
