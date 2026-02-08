import type {
  ExerciseData,
  LearningDb,
  LessonData,
  ModuleData,
  UserProgress,
  UserStats,
} from '@/types/learning';

const DB_KEY = 'learning-db';
const DEFAULT_USER_ID = 'local-user';

type ModuleManifest = {
  modules: ModuleData[];
  moduleFiles: Record<string, string>;
};

type ModulePayload = {
  module: ModuleData;
  lessons: LessonData[];
  exercises: ExerciseData[];
};

type ConceptMetric = {
  concept: string;
  total: number;
  completed: number;
  due: number;
  correct: number;
  wrong: number;
  accuracy: number;
};

const DEFAULT_DB: LearningDb = {
  modules: [],
  lessons: [],
  exercises: [],
  loadedModules: [],
  userProgress: [],
  userStats: {},
};

let manifestCache: ModuleManifest | null = null;
const payloadCache = new Map<string, ModulePayload>();
let fullSeedCache: {
  modules: ModuleData[];
  lessons: LessonData[];
  exercises: ExerciseData[];
} | null = null;

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

const MINIMAL_FALLBACK_MODULES: ModuleData[] = [
  {
    id: 'module-html-basics',
    language: 'html',
    title: 'HTML Básico',
    description: 'Trilha de HTML',
    order: 1,
    tags: ['html'],
  },
  {
    id: 'module-css-basics',
    language: 'css',
    title: 'CSS Básico',
    description: 'Trilha de CSS',
    order: 2,
    tags: ['css'],
  },
  {
    id: 'module-js-basics',
    language: 'javascript',
    title: 'JavaScript Básico',
    description: 'Trilha de JavaScript',
    order: 3,
    tags: ['js'],
  },
];

const loadFullSeedFromPublic = async () => {
  if (fullSeedCache) return fullSeedCache;

  try {
    const response = await fetch(`${getBaseSeedPath()}learning.json`, {
      cache: 'no-store',
    });
    if (response.ok) {
      const parsed = (await response.json()) as {
        modules: ModuleData[];
        lessons: LessonData[];
        exercises: ExerciseData[];
      };

      if (parsed.modules?.length) {
        fullSeedCache = {
          modules: parsed.modules,
          lessons: parsed.lessons ?? [],
          exercises: parsed.exercises ?? [],
        };
        return fullSeedCache;
      }
    }
  } catch {
    // fallback below
  }

  fullSeedCache = {
    modules: MINIMAL_FALLBACK_MODULES,
    lessons: [],
    exercises: [],
  };
  return fullSeedCache;
};

const normalizeLessons = (lessons: LessonData[]): LessonData[] => {
  const grouped = lessons.reduce<Record<string, LessonData[]>>((acc, lesson) => {
    if (!acc[lesson.module_id]) acc[lesson.module_id] = [];
    acc[lesson.module_id].push(lesson);
    return acc;
  }, {});

  return Object.values(grouped)
    .flatMap(moduleLessons =>
      [...moduleLessons]
        .sort((a, b) => a.order - b.order)
        .map((lesson, index, ordered) => {
          const existing = lesson.prerequisites ?? [];
          if (existing.length > 0) {
            return {
              ...lesson,
              prerequisites: [...existing],
            };
          }

          return {
            ...lesson,
            prerequisites: index === 0 ? [] : [ordered[index - 1].id],
          };
        })
    )
    .sort((a, b) => {
      if (a.module_id === b.module_id) return a.order - b.order;
      return a.module_id.localeCompare(b.module_id);
    });
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
      loadedModules: parsed.loadedModules ?? [],
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

const getBaseSeedPath = () => `${import.meta.env.BASE_URL}seed/`;

const loadManifest = async (): Promise<ModuleManifest> => {
  if (manifestCache) return manifestCache;

  try {
    const response = await fetch(`${getBaseSeedPath()}modules.json`, {
      cache: 'no-store',
    });

    if (response.ok) {
      const parsed = (await response.json()) as Partial<ModuleManifest>;
      const modules = [...(parsed.modules ?? [])].sort((a, b) => a.order - b.order);
      if (modules.length > 0) {
        const moduleFiles = modules.reduce<Record<string, string>>((acc, module) => {
          const fromManifest = parsed.moduleFiles?.[module.id];
          acc[module.id] = fromManifest ?? `modules/${module.id}.json`;
          return acc;
        }, {});

        manifestCache = { modules, moduleFiles };
        return manifestCache;
      }
    }
  } catch {
    // continue to next fallback
  }

  const fullSeed = await loadFullSeedFromPublic();
  const modules = [...fullSeed.modules].sort((a, b) => a.order - b.order);
  const moduleFiles = modules.reduce<Record<string, string>>((acc, module) => {
    acc[module.id] = `modules/${module.id}.json`;
    return acc;
  }, {});

  manifestCache = { modules, moduleFiles };
  return manifestCache;
};

const loadModulePayload = async (moduleId: string): Promise<ModulePayload | null> => {
  if (payloadCache.has(moduleId)) {
    return payloadCache.get(moduleId) ?? null;
  }

  const manifest = await loadManifest();
  const filePath = manifest.moduleFiles[moduleId];

  if (filePath) {
    try {
      const response = await fetch(`${getBaseSeedPath()}${filePath}`, {
        cache: 'no-store',
      });
      if (response.ok) {
        const payload = (await response.json()) as ModulePayload;
        const normalizedPayload: ModulePayload = {
          module: payload.module,
          lessons: normalizeLessons(payload.lessons),
          exercises: payload.exercises,
        };
        payloadCache.set(moduleId, normalizedPayload);
        return normalizedPayload;
      }
    } catch {
      // continue to fallback
    }
  }

  const fullSeed = await loadFullSeedFromPublic();
  const module = fullSeed.modules.find(item => item.id === moduleId);
  if (!module) return null;
  const lessons = fullSeed.lessons.filter(item => item.module_id === moduleId);
  const lessonIds = new Set(lessons.map(item => item.id));
  const exercises = fullSeed.exercises.filter(item => lessonIds.has(item.lesson_id));

  const fallbackPayload: ModulePayload = {
    module,
    lessons,
    exercises,
  };

  const normalizedFallback: ModulePayload = {
    ...fallbackPayload,
    lessons: normalizeLessons(fallbackPayload.lessons),
  };

  payloadCache.set(moduleId, normalizedFallback);
  return normalizedFallback;
};

const mergeModuleData = (db: LearningDb, payload: ModulePayload): LearningDb => {
  const nextModules = db.modules
    .filter(module => module.id !== payload.module.id)
    .concat(payload.module)
    .sort((a, b) => a.order - b.order);

  const nextLessons = normalizeLessons(
    db.lessons
      .filter(lesson => lesson.module_id !== payload.module.id)
      .concat(payload.lessons)
  );

  const lessonIds = new Set(payload.lessons.map(lesson => lesson.id));
  const nextExercises = db.exercises
    .filter(exercise => !lessonIds.has(exercise.lesson_id))
    .concat(payload.exercises);

  const loaded = new Set(db.loadedModules ?? []);
  loaded.add(payload.module.id);

  return {
    ...db,
    modules: nextModules,
    lessons: nextLessons,
    exercises: nextExercises,
    loadedModules: Array.from(loaded),
  };
};

export const initializeLearningDb = async () => {
  const db = loadDb();
  const manifest = await loadManifest();
  const modules = [...manifest.modules].sort((a, b) => a.order - b.order);
  const moduleIds = new Set(modules.map(module => module.id));

  const nextBase: LearningDb = {
    ...db,
    modules,
    lessons: normalizeLessons(db.lessons.filter(lesson => moduleIds.has(lesson.module_id))),
    exercises: db.exercises.filter(exercise => {
      const lesson = db.lessons.find(item => item.id === exercise.lesson_id);
      return lesson ? moduleIds.has(lesson.module_id) : true;
    }),
    loadedModules: (db.loadedModules ?? []).filter(moduleId => moduleIds.has(moduleId)),
  };

  saveDb(nextBase);

  const firstModuleId = modules[0]?.id;
  if (!firstModuleId) return nextBase;

  const hasFirstLoaded = (nextBase.loadedModules ?? []).includes(firstModuleId)
    && nextBase.lessons.some(lesson => lesson.module_id === firstModuleId)
    && nextBase.exercises.some(exercise => {
      const lesson = nextBase.lessons.find(item => item.id === exercise.lesson_id);
      return lesson?.module_id === firstModuleId;
    });

  if (hasFirstLoaded) return nextBase;

  const loadedDb = await loadModuleData(firstModuleId);
  return loadedDb;
};

export const loadModuleData = async (moduleId: string) => {
  const db = loadDb();
  const alreadyLoaded = (db.loadedModules ?? []).includes(moduleId)
    && db.lessons.some(lesson => lesson.module_id === moduleId)
    && db.exercises.some(exercise => {
      const lesson = db.lessons.find(item => item.id === exercise.lesson_id);
      return lesson?.module_id === moduleId;
    });

  if (alreadyLoaded) return db;

  const payload = await loadModulePayload(moduleId);
  if (!payload) return db;

  const next = mergeModuleData(db, payload);
  saveDb(next);
  return next;
};

export const loadAllModuleData = async () => {
  const manifest = await loadManifest();
  let db = loadDb();

  for (const module of manifest.modules) {
    db = await loadModuleData(module.id);
  }

  return db;
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
    loadedModules: db.loadedModules ?? [],
    stats,
    progressByExercise,
  };
};

const getConceptAccuracyMap = (progressList: UserProgress[]) => {
  const conceptTotals = progressList.reduce<Record<string, { correct: number; wrong: number }>>(
    (acc, progress) => {
      const concept = progress.concept || 'geral';
      if (!acc[concept]) {
        acc[concept] = { correct: 0, wrong: 0 };
      }

      acc[concept].correct += progress.total_correct;
      acc[concept].wrong += progress.total_wrong ?? (progress.last_result === 'wrong' ? 1 : 0);
      return acc;
    },
    {}
  );

  return new Map(
    Object.entries(conceptTotals).map(([concept, totals]) => {
      const attempts = totals.correct + totals.wrong;
      const accuracy = attempts > 0 ? totals.correct / attempts : 0;
      return [concept, accuracy];
    })
  );
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
  const userProgress = db.userProgress.filter(progress => progress.user_id === userId);
  const conceptAccuracy = getConceptAccuracyMap(userProgress);

  const due = userProgress
    .filter(progress => new Date(progress.due_at) <= now)
    .map(progress => {
      const exercise = db.exercises.find(ex => ex.id === progress.exercise_id);
      if (!exercise) return null;

      const dueAgeHours = (now.getTime() - new Date(progress.due_at).getTime()) / (1000 * 60 * 60);
      const accuracy = conceptAccuracy.get(progress.concept) ?? 0;
      const weakness = 1 - accuracy;
      const wrongBoost = progress.last_result === 'wrong' ? 0.25 : 0;
      const overdueBoost = Math.min(0.25, Math.max(0, dueAgeHours) / 96);
      const priority = weakness + wrongBoost + overdueBoost;

      return {
        exercise,
        progress,
        priority,
      };
    })
    .filter((item): item is { exercise: ExerciseData; progress: UserProgress; priority: number } => Boolean(item))
    .sort((a, b) => {
      if (b.priority !== a.priority) return b.priority - a.priority;
      return new Date(a.progress.due_at).getTime() - new Date(b.progress.due_at).getTime();
    })
    .slice(0, limit)
    .map(item => item.exercise);

  return due;
};

export const getConceptProgress = (
  userId: string = DEFAULT_USER_ID,
  moduleId?: string
): ConceptMetric[] => {
  const db = loadDb();
  const now = new Date();
  const lessons = moduleId ? db.lessons.filter(lesson => lesson.module_id === moduleId) : db.lessons;
  const lessonIds = new Set(lessons.map(lesson => lesson.id));
  const lessonConceptById = lessons.reduce<Record<string, string>>((acc, lesson) => {
    acc[lesson.id] = lesson.concept;
    return acc;
  }, {});

  const exercises = db.exercises.filter(exercise => lessonIds.has(exercise.lesson_id));
  const userProgress = db.userProgress.filter(progress => progress.user_id === userId);
  const progressByExercise = userProgress.reduce<Record<string, UserProgress>>((acc, progress) => {
    acc[progress.exercise_id] = progress;
    return acc;
  }, {});

  const conceptMetrics = exercises.reduce<Record<string, ConceptMetric>>((acc, exercise) => {
    const concept = lessonConceptById[exercise.lesson_id] ?? 'geral';
    const progress = progressByExercise[exercise.id];

    if (!acc[concept]) {
      acc[concept] = {
        concept,
        total: 0,
        completed: 0,
        due: 0,
        correct: 0,
        wrong: 0,
        accuracy: 0,
      };
    }

    acc[concept].total += 1;

    if (progress) {
      if (progress.total_correct > 0) acc[concept].completed += 1;
      if (new Date(progress.due_at) <= now) acc[concept].due += 1;
      acc[concept].correct += progress.total_correct;
      acc[concept].wrong += progress.total_wrong ?? (progress.last_result === 'wrong' ? 1 : 0);
    }

    return acc;
  }, {});

  return Object.values(conceptMetrics)
    .map(metric => {
      const attempts = metric.correct + metric.wrong;
      return {
        ...metric,
        accuracy: attempts > 0 ? metric.correct / attempts : 0,
      };
    })
    .sort((a, b) => {
      const aCompletion = a.total ? a.completed / a.total : 0;
      const bCompletion = b.total ? b.completed / b.total : 0;
      if (aCompletion !== bCompletion) return aCompletion - bCompletion;
      if (a.accuracy !== b.accuracy) return a.accuracy - b.accuracy;
      return b.due - a.due;
    });
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
    total_wrong: 0,
    last_result: 'wrong',
    updated_at: now.toISOString(),
  };

  const currentWrong = base.total_wrong ?? 0;

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
      total_wrong: currentWrong,
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
    total_wrong: currentWrong + 1,
    last_result: 'wrong',
    updated_at: now.toISOString(),
  };
};

const getConceptWeakness = (progressList: UserProgress[], concept: string) => {
  const relevant = progressList.filter(progress => progress.concept === concept);
  if (!relevant.length) return 0;

  const correct = relevant.reduce((sum, item) => sum + item.total_correct, 0);
  const wrong = relevant.reduce(
    (sum, item) => sum + (item.total_wrong ?? (item.last_result === 'wrong' ? 1 : 0)),
    0
  );

  const attempts = correct + wrong;
  if (attempts === 0) return 0;
  return Math.min(1, Math.max(0, wrong / attempts));
};

const shiftDueByHours = (baseDate: Date, hours: number) => {
  const due = new Date(baseDate);
  due.setHours(due.getHours() + hours);
  return due;
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

  const userProgress = db.userProgress.filter(progress => progress.user_id === userId);
  const conceptWeakness = getConceptWeakness(userProgress, concept);

  const updated = applySpacedRepetition(existing ?? null, correct, now);
  updated.user_id = userId;
  updated.exercise_id = exerciseId;
  updated.concept = concept;

  if (correct && conceptWeakness > 0.5) {
    const reducedInterval = Math.max(1, Math.floor(updated.interval_days * 0.7));
    updated.interval_days = reducedInterval;
    const due = new Date(now);
    due.setDate(due.getDate() + reducedInterval);
    updated.due_at = due.toISOString();
  }

  if (!correct && conceptWeakness > 0.5) {
    updated.interval_days = 0;
    updated.due_at = shiftDueByHours(now, 6).toISOString();
  }

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
  const progress = db.userProgress.filter(item => item.user_id === userId);
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

  const lessonProgressMap = new Map(
    lessons.map(lesson => [lesson.id, getLessonProgress(lesson.id, userId)])
  );

  const completedLessons = new Set(
    lessons
      .filter(lesson => {
        const progress = lessonProgressMap.get(lesson.id);
        return progress ? progress.total > 0 && progress.completed === progress.total : false;
      })
      .map(lesson => lesson.id)
  );

  for (const lesson of lessons) {
    const prerequisites = lesson.prerequisites ?? [];
    const unlocked = prerequisites.every(id => completedLessons.has(id));
    if (!unlocked) continue;

    const progress = lessonProgressMap.get(lesson.id);
    if (!progress) continue;
    if (progress.completed < progress.total) return lesson.id;
  }

  return lessons[0]?.id ?? null;
};

export const DEFAULT_LEARNING_USER = DEFAULT_USER_ID;
