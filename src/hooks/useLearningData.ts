import { useCallback, useEffect, useState } from 'react';
import {
  DEFAULT_LEARNING_USER,
  getConceptProgress,
  getDailyReviewExercises,
  getLearningSnapshot,
  getModuleDiagnostic,
  getModuleDiagnosticQuestions,
  getModuleProjectStatus,
  getWeeklyLeaderboard,
  getWeeklyProgress,
  initializeLearningDb,
  loadAllModuleData,
  loadModuleData,
  recordExerciseAttempt,
  saveModuleDiagnostic,
  saveModuleProject,
  setWeeklyGoal,
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
  weeklyProgress: {
    weekKey: string;
    earnedXp: number;
    goalXp: number;
    remainingXp: number;
    percent: number;
  } | null;
  leaderboard: {
    userId: string;
    label: string;
    xp: number;
  }[];
  conceptProgress: {
    concept: string;
    total: number;
    completed: number;
    due: number;
    accuracy: number;
  }[];
  moduleDiagnostics: Record<string, ReturnType<typeof getModuleDiagnostic>>;
  moduleProjectStatus: Record<
    string,
    ReturnType<typeof getModuleProjectStatus>
  >;
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
    weeklyProgress: null,
    leaderboard: [],
    conceptProgress: [],
    moduleDiagnostics: {},
    moduleProjectStatus: {},
  });

  const refresh = useCallback(() => {
    const snapshot = getLearningSnapshot(userId);
    const moduleDiagnostics = snapshot.modules.reduce<Record<string, ReturnType<typeof getModuleDiagnostic>>>(
      (acc, module) => {
        acc[module.id] = getModuleDiagnostic(module.id, userId);
        return acc;
      },
      {}
    );
    const moduleProjectStatus = snapshot.modules.reduce<Record<string, ReturnType<typeof getModuleProjectStatus>>>(
      (acc, module) => {
        acc[module.id] = getModuleProjectStatus(module.id, userId);
        return acc;
      },
      {}
    );

    setState({
      loading: false,
      modules: snapshot.modules,
      lessons: snapshot.lessons,
      exercises: snapshot.exercises,
      loadedModules: snapshot.loadedModules ?? [],
      progressByExercise: snapshot.progressByExercise,
      stats: snapshot.stats,
      dueExercises: getDailyReviewExercises(userId, 3, 5),
      weeklyProgress: getWeeklyProgress(userId),
      leaderboard: getWeeklyLeaderboard({ userId, limit: 5 }),
      conceptProgress: getConceptProgress(userId),
      moduleDiagnostics,
      moduleProjectStatus,
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

  const saveDiagnostic = useCallback(
    (params: {
      moduleId: string;
      score: number;
      questionCount: number;
      masteredLessonIds: string[];
    }) => {
      const record = saveModuleDiagnostic({
        userId,
        moduleId: params.moduleId,
        score: params.score,
        questionCount: params.questionCount,
        masteredLessonIds: params.masteredLessonIds,
      });
      refresh();
      return record;
    },
    [refresh, userId]
  );

  const getDiagnosticQuestions = useCallback(
    (moduleId: string, count?: number) => getModuleDiagnosticQuestions(moduleId, count),
    []
  );

  const saveProject = useCallback(
    (params: {
      moduleId: string;
      score: number;
      checklist: { id: string; checked: boolean }[];
      notes?: string;
      projectUrl?: string;
    }) => {
      const record = saveModuleProject({
        userId,
        moduleId: params.moduleId,
        score: params.score,
        checklist: params.checklist,
        notes: params.notes,
        projectUrl: params.projectUrl,
      });
      refresh();
      return record;
    },
    [refresh, userId]
  );

  const updateWeeklyGoal = useCallback(
    (goalXp: number) => {
      const goal = setWeeklyGoal(goalXp, userId);
      refresh();
      return goal;
    },
    [refresh, userId]
  );

  return {
    ...state,
    refresh,
    recordAttempt,
    ensureModuleLoaded,
    ensureAllModulesLoaded,
    getDiagnosticQuestions,
    saveDiagnostic,
    saveProject,
    updateWeeklyGoal,
  };
};
