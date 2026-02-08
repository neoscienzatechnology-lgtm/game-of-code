import { useCallback, useEffect, useState } from 'react';
import {
  DEFAULT_LEARNING_USER,
  getConceptProgress,
  getDueExercises,
  getLearningSnapshot,
  initializeLearningDb,
  loadAllModuleData,
  loadModuleData,
  recordExerciseAttempt,
} from '@/lib/learningDb';
import type { ExerciseData, LessonData, ModuleData, UserProgress, UserStats } from '@/types/learning';

interface LearningState {
  loading: boolean;
  modules: ModuleData[];
  lessons: LessonData[];
  exercises: ExerciseData[];
  loadedModules: string[];
  progressByExercise: Record<string, UserProgress>;
  stats: UserStats | null;
  dueExercises: ExerciseData[];
  conceptProgress: {
    concept: string;
    total: number;
    completed: number;
    due: number;
    accuracy: number;
  }[];
}

export const useLearningData = (userId: string = DEFAULT_LEARNING_USER) => {
  const [state, setState] = useState<LearningState>({
    loading: true,
    modules: [],
    lessons: [],
    exercises: [],
    loadedModules: [],
    progressByExercise: {},
    stats: null,
    dueExercises: [],
    conceptProgress: [],
  });

  const refresh = useCallback(() => {
    const snapshot = getLearningSnapshot(userId);
    setState({
      loading: false,
      modules: snapshot.modules,
      lessons: snapshot.lessons,
      exercises: snapshot.exercises,
      loadedModules: snapshot.loadedModules ?? [],
      progressByExercise: snapshot.progressByExercise,
      stats: snapshot.stats,
      dueExercises: getDueExercises(userId, 3),
      conceptProgress: getConceptProgress(userId),
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

  const ensureModuleLoaded = useCallback(
    async (moduleId: string) => {
      await loadModuleData(moduleId);
      refresh();
    },
    [refresh]
  );

  const ensureAllModulesLoaded = useCallback(async () => {
    await loadAllModuleData();
    refresh();
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
    ensureModuleLoaded,
    ensureAllModulesLoaded,
  };
};
