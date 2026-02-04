import { useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { LearningExerciseSession } from '@/components/LearningExerciseSession';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/AuthContext';
import { useLearningData } from '@/hooks/useLearningData';

export default function Lesson() {
  const { lessonId } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { loading, lessons, exercises, recordAttempt } = useLearningData(user?.id);
  const [stage, setStage] = useState<'intro' | 'exercises' | 'complete'>('intro');

  const lesson = useMemo(
    () => lessons.find(item => item.id === lessonId) ?? null,
    [lessons, lessonId]
  );

  const lessonExercises = useMemo(
    () => exercises.filter(exercise => exercise.lesson_id === lessonId),
    [exercises, lessonId]
  );

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-muted-foreground">
        Carregando licao...
      </div>
    );
  }

  if (!lesson) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-2xl font-bold mb-2">Licao nao encontrada</h1>
        <p className="text-muted-foreground mb-6">Verifique o link e tente novamente.</p>
        <Button onClick={() => navigate('/')}>Voltar ao inicio</Button>
      </div>
    );
  }

  if (stage === 'complete') {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="glass-card p-8 max-w-lg text-center space-y-4">
          <h1 className="text-2xl font-bold">Licao concluida!</h1>
          <p className="text-muted-foreground">
            Voce finalizou {lesson.title}. Continue para manter o ritmo.
          </p>
          <Button onClick={() => navigate('/')}>Voltar ao inicio</Button>
        </div>
      </div>
    );
  }

  if (stage === 'intro') {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="glass-card p-8 max-w-lg space-y-4">
          <div className="text-xs uppercase tracking-wide text-muted-foreground">
            Microlicao (15-60s)
          </div>
          <h1 className="text-2xl font-bold">{lesson.title}</h1>
          <p className="text-muted-foreground text-sm leading-relaxed">{lesson.content}</p>
          <Button
            onClick={() => setStage('exercises')}
            className="w-full h-12 gradient-primary glow-primary font-semibold"
          >
            Iniciar exercicios
          </Button>
          <Button variant="secondary" onClick={() => navigate('/')} className="w-full h-12">
            Voltar
          </Button>
        </div>
      </div>
    );
  }

  if (!lessonExercises.length) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="glass-card p-8 max-w-lg text-center space-y-4">
          <h1 className="text-2xl font-bold">Sem exercicios</h1>
          <p className="text-muted-foreground">
            Esta licao ainda nao possui exercicios configurados.
          </p>
          <Button onClick={() => navigate('/')}>Voltar ao inicio</Button>
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
      getConceptForExercise={() => lesson.concept}
    />
  );
}
