import { useCallback, useEffect, useState } from 'react';
import {
  DEFAULT_LEARNING_USER,
  getDueExercises,
  getLearningSnapshot,
  initializeLearningDb,
  recordExerciseAttempt,
} from '@/lib/learningDb';
import type { ExerciseData, LessonData, ModuleData, UserProgress, UserStats } from '@/types/learning';

interface LearningState {
  loading: boolean;
  modules: ModuleData[];
  lessons: LessonData[];
  exercises: ExerciseData[];
  progressByExercise: Record<string, UserProgress>;
  stats: UserStats | null;
  dueExercises: ExerciseData[];
}

export const useLearningData = (userId: string = DEFAULT_LEARNING_USER) => {
  const [state, setState] = useState<LearningState>({
    loading: true,
    modules: [],
    lessons: [],
    exercises: [],
    progressByExercise: {},
    stats: null,
    dueExercises: [],
  });

  const refresh = useCallback(() => {
    const snapshot = getLearningSnapshot(userId);
    setState({
      loading: false,
      modules: snapshot.modules,
      lessons: snapshot.lessons,
      exercises: snapshot.exercises,
      progressByExercise: snapshot.progressByExercise,
      stats: snapshot.stats,
      dueExercises: getDueExercises(userId, 3),
    });
  }, [userId]);

  useEffect(() => {
    let active = true;
    initializeLearningDb().then(() => {
      if (active) refresh();
    });
    return () => {
      active = false;
    };
  }, [refresh]);

  const recordAttempt = useCallback(
    (params: { exerciseId: string; correct: boolean; concept: string }) => {
      recordExerciseAttempt({
        userId,
        exerciseId: params.exerciseId,
        correct: params.correct,
        concept: params.concept,
      });
      refresh();
    },
    [refresh, userId]
  );

  return {
    ...state,
    refresh,
    recordAttempt,
  };
};
