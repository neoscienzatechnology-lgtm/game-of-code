import { learningSeed } from '@/data/learningSeed';
import type {
  ExerciseData,
  LearningDb,
  LearningSeed,
  ModuleData,
  LessonData,
  UserProgress,
  UserStats,
} from '@/types/learning';

const DB_KEY = 'learning-db';
const DEFAULT_USER_ID = 'local-user';

const DEFAULT_DB: LearningDb = {
  modules: [],
  lessons: [],
  exercises: [],
  userProgress: [],
  userStats: {},
};

const getTodayKey = (date: Date) => date.toISOString().split('T')[0];

const daysBetween = (a: Date, b: Date) => {
  const utcA = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utcB = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
  return Math.floor((utcA - utcB) / (1000 * 60 * 60 * 24));
};

const getXpForExercise = (exercise: ExerciseData) => {
  if (exercise.difficulty === 'hard') return 30;
  if (exercise.difficulty === 'medium') return 20;
  return 10;
};

const canUseProtection = (stats: UserStats, now: Date) => {
  if (!stats.protection_used_at) return true;
  const last = new Date(stats.protection_used_at);
  return daysBetween(now, last) >= 7;
};

const updateStreak = (stats: UserStats, now: Date) => {
  const todayKey = getTodayKey(now);
  if (!stats.last_active_date) {
    return {
      ...stats,
      streak_days: 1,
      last_active_date: todayKey,
    };
  }

  if (stats.last_active_date === todayKey) return stats;

  const lastActive = new Date(stats.last_active_date);
  const gap = daysBetween(now, lastActive);

  if (gap === 1) {
    return {
      ...stats,
      streak_days: stats.streak_days + 1,
      last_active_date: todayKey,
    };
  }

  if (gap > 1 && canUseProtection(stats, now)) {
    return {
      ...stats,
      last_active_date: todayKey,
      protection_used_at: now.toISOString(),
    };
  }

  return {
    ...stats,
    streak_days: 1,
    last_active_date: todayKey,
  };
};

const loadDb = (): LearningDb => {
  try {
    const raw = localStorage.getItem(DB_KEY);
    if (!raw) return { ...DEFAULT_DB };
    const parsed = JSON.parse(raw) as LearningDb;
    return {
      ...DEFAULT_DB,
      ...parsed,
      userProgress: parsed.userProgress ?? [],
      userStats: parsed.userStats ?? {},
    };
  } catch {
    return { ...DEFAULT_DB };
  }
};

const saveDb = (db: LearningDb) => {
  localStorage.setItem(DB_KEY, JSON.stringify(db));
};

const loadSeed = async (): Promise<LearningSeed> => {
  try {
    const response = await fetch(`${import.meta.env.BASE_URL}seed/learning.json`, {
      cache: 'no-store',
    });
    if (response.ok) {
      return (await response.json()) as LearningSeed;
    }
  } catch {
    // fallback below
  }
  return learningSeed;
};

export const initializeLearningDb = async () => {
  const db = loadDb();
  const seed = await loadSeed();
  const dbLessonIds = new Set(db.lessons.map(lesson => lesson.id));
  const dbExerciseIds = new Set(db.exercises.map(exercise => exercise.id));
  const seedExerciseIds = new Set(seed.exercises.map(exercise => exercise.id));

  const hasMissingData = !db.lessons.length || !db.exercises.length;
  const hasCountMismatch =
    db.modules.length !== seed.modules.length
    || db.lessons.length !== seed.lessons.length
    || db.exercises.length !== seed.exercises.length;
  const hasIdMismatch =
    seed.lessons.some(lesson => !dbLessonIds.has(lesson.id))
    || seed.exercises.some(exercise => !dbExerciseIds.has(exercise.id));

  if (!hasMissingData && !hasCountMismatch && !hasIdMismatch) return db;

  const next: LearningDb = {
    ...db,
    modules: seed.modules,
    lessons: seed.lessons,
    exercises: seed.exercises,
    userProgress: db.userProgress.filter(progress => seedExerciseIds.has(progress.exercise_id)),
  };
  saveDb(next);
  return next;
};

export const getLearningSnapshot = (userId: string = DEFAULT_USER_ID) => {
  const db = loadDb();
  const stats = db.userStats[userId] ?? {
    user_id: userId,
    xp: 0,
    streak_days: 0,
    last_active_date: null,
    protection_used_at: null,
  };

  const progressByExercise = db.userProgress.reduce<Record<string, UserProgress>>(
    (acc, progress) => {
      if (progress.user_id === userId) acc[progress.exercise_id] = progress;
      return acc;
    },
    {}
  );

  return {
    modules: db.modules,
    lessons: db.lessons,
    exercises: db.exercises,
    stats,
    progressByExercise,
  };
};

export const getLessonById = (lessonId: string) => {
  const db = loadDb();
  return db.lessons.find(lesson => lesson.id === lessonId) ?? null;
};

export const getExercisesByLesson = (lessonId: string) => {
  const db = loadDb();
  return db.exercises.filter(exercise => exercise.lesson_id === lessonId);
};

export const getModules = (): ModuleData[] => {
  const db = loadDb();
  return db.modules;
};

export const getLessons = (): LessonData[] => {
  const db = loadDb();
  return db.lessons;
};

export const getExercises = (): ExerciseData[] => {
  const db = loadDb();
  return db.exercises;
};

export const getDueExercises = (userId: string = DEFAULT_USER_ID, limit = 3) => {
  const db = loadDb();
  const now = new Date();
  const due = db.userProgress
    .filter(progress => progress.user_id === userId)
    .filter(progress => new Date(progress.due_at) <= now)
    .sort((a, b) => new Date(a.due_at).getTime() - new Date(b.due_at).getTime())
    .slice(0, limit)
    .map(progress => db.exercises.find(ex => ex.id === progress.exercise_id))
    .filter((exercise): exercise is ExerciseData => Boolean(exercise));

  return due;
};

export const applySpacedRepetition = (
  progress: UserProgress | null,
  correct: boolean,
  now: Date
): UserProgress => {
  const base: UserProgress = progress ?? {
    user_id: DEFAULT_USER_ID,
    exercise_id: '',
    concept: '',
    ease: 2.5,
    interval_days: 0,
    due_at: now.toISOString(),
    streak_correct: 0,
    total_correct: 0,
    last_result: 'wrong',
    updated_at: now.toISOString(),
  };

  if (correct) {
    const nextInterval =
      base.interval_days <= 0
        ? 1
        : Math.max(1, Math.round(base.interval_days * base.ease));
    const nextEase = Math.min(3.0, base.ease + 0.05);
    const due = new Date(now);
    due.setDate(due.getDate() + nextInterval);

    return {
      ...base,
      ease: nextEase,
      interval_days: nextInterval,
      due_at: due.toISOString(),
      streak_correct: base.streak_correct + 1,
      total_correct: base.total_correct + 1,
      last_result: 'correct',
      updated_at: now.toISOString(),
    };
  }

  const due = new Date(now);
  due.setDate(due.getDate() + 1);

  return {
    ...base,
    ease: Math.max(1.3, base.ease - 0.2),
    interval_days: 1,
    due_at: due.toISOString(),
    streak_correct: 0,
    last_result: 'wrong',
    updated_at: now.toISOString(),
  };
};

export const recordExerciseAttempt = (params: {
  userId?: string;
  exerciseId: string;
  correct: boolean;
  concept: string;
  now?: Date;
}) => {
  const { userId = DEFAULT_USER_ID, exerciseId, correct, concept, now = new Date() } = params;
  const db = loadDb();
  const exercise = db.exercises.find(ex => ex.id === exerciseId);
  if (!exercise) return null;

  const existing = db.userProgress.find(
    progress => progress.user_id === userId && progress.exercise_id === exerciseId
  );

  const updated = applySpacedRepetition(existing ?? null, correct, now);
  updated.user_id = userId;
  updated.exercise_id = exerciseId;
  updated.concept = concept;

  const nextProgress = existing
    ? db.userProgress.map(progress =>
        progress === existing ? { ...updated } : progress
      )
    : [...db.userProgress, updated];

  const stats = db.userStats[userId] ?? {
    user_id: userId,
    xp: 0,
    streak_days: 0,
    last_active_date: null,
    protection_used_at: null,
  };

  const nextStats = correct
    ? {
        ...updateStreak(stats, now),
        xp: stats.xp + getXpForExercise(exercise),
      }
    : stats;

  const nextDb: LearningDb = {
    ...db,
    userProgress: nextProgress,
    userStats: {
      ...db.userStats,
      [userId]: nextStats,
    },
  };

  saveDb(nextDb);
  return updated;
};

export const getModuleProgress = (
  moduleId: string,
  userId: string = DEFAULT_USER_ID
) => {
  const db = loadDb();
  const lessons = db.lessons.filter(lesson => lesson.module_id === moduleId);
  const lessonIds = lessons.map(lesson => lesson.id);
  const exercises = db.exercises.filter(ex => lessonIds.includes(ex.lesson_id));
  const progress = db.userProgress.filter(progress => progress.user_id === userId);
  const completedIds = new Set(
    progress.filter(item => item.total_correct > 0).map(item => item.exercise_id)
  );

  const completed = exercises.filter(ex => completedIds.has(ex.id)).length;
  const total = exercises.length;
  const percent = total ? Math.round((completed / total) * 100) : 0;

  return { completed, total, percent };
};

export const getLessonProgress = (
  lessonId: string,
  userId: string = DEFAULT_USER_ID
) => {
  const db = loadDb();
  const exercises = db.exercises.filter(ex => ex.lesson_id === lessonId);
  const progress = db.userProgress.filter(item => item.user_id === userId);
  const completedIds = new Set(
    progress.filter(item => item.total_correct > 0).map(item => item.exercise_id)
  );
  const completed = exercises.filter(ex => completedIds.has(ex.id)).length;
  const total = exercises.length;
  const percent = total ? Math.round((completed / total) * 100) : 0;

  return { completed, total, percent };
};

export const getNextLessonId = (moduleId: string, userId: string = DEFAULT_USER_ID) => {
  const db = loadDb();
  const lessons = db.lessons
    .filter(lesson => lesson.module_id === moduleId)
    .sort((a, b) => a.order - b.order);

  for (const lesson of lessons) {
    const progress = getLessonProgress(lesson.id, userId);
    if (progress.completed < progress.total) return lesson.id;
  }

  return lessons[0]?.id ?? null;
};

export const DEFAULT_LEARNING_USER = DEFAULT_USER_ID;
