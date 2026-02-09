import type {
  AttemptLogEntry,
  ExerciseData,
  LearningDb,
  LessonData,
  ModuleDiagnosticRecord,
  ModuleProjectSubmission,
  ModuleData,
  UserProgress,
  UserStats,
} from '@/types/learning';

const DB_KEY = 'learning-db';
const DEFAULT_USER_ID = 'local-user';
const SEED_REVISION = '2026-02-09-learning-suite-v1';

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
  seedRevision: SEED_REVISION,
  moduleDiagnostics: [],
  moduleProjects: [],
  attemptLog: [],
  weeklyGoals: {},
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

const DEFAULT_WEEKLY_GOAL_XP = 300;
const DAILY_REVIEW_MIN = 3;
const DAILY_REVIEW_MAX = 5;
const MODULE_DIAGNOSTIC_QUESTION_COUNT = 5;

const getTodayKey = (date: Date) => date.toISOString().split('T')[0];

const getWeekStart = (date: Date) => {
  const start = new Date(date);
  const day = start.getDay();
  const diff = day === 0 ? -6 : 1 - day; // Monday as first day
  start.setHours(0, 0, 0, 0);
  start.setDate(start.getDate() + diff);
  return start;
};

const getWeekEnd = (date: Date) => {
  const end = getWeekStart(date);
  end.setDate(end.getDate() + 7);
  return end;
};

const getWeekKey = (date: Date) => {
  const start = getWeekStart(date);
  return start.toISOString().slice(0, 10);
};

const isWithinInterval = (value: Date, start: Date, end: Date) =>
  value.getTime() >= start.getTime() && value.getTime() < end.getTime();

const diagnosticRecordKey = (userId: string, moduleId: string) => `${userId}::${moduleId}`;

const getProgressWrongCount = (progress: UserProgress | undefined) =>
  progress?.total_wrong ?? (progress?.last_result === 'wrong' ? 1 : 0);

const isLikelyCodeFragment = (value: string) => {
  const trimmed = value.trim();
  if (!trimmed) return false;
  if (/<\/?[a-z!][\s\S]*>/i.test(trimmed)) return true;
  if (/[@{}();=]/.test(trimmed)) return true;
  if (/=>/.test(trimmed)) return true;
  if (/\b(function|const|let|var|return|if|for|while|class|import|export)\b/i.test(trimmed)) return true;
  if (trimmed.includes('\n') && /[<>:{};]/.test(trimmed)) return true;
  return false;
};

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

const normalizeTheoryText = (value: string) =>
  String(value || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();

const hasTermInText = (haystack: string, term: string) => {
  if (!term) return true;
  return (
    haystack === term
    || haystack.startsWith(`${term} `)
    || haystack.endsWith(` ${term}`)
    || haystack.includes(` ${term} `)
  );
};

const getSingleBlankAnswer = (exercise: ExerciseData) => {
  const validation = exercise.validations.find(item => item.type === 'blank');
  if (!validation || validation.blanks.length !== 1) return null;
  return validation.blanks[0].answer.trim();
};

const isStandaloneBlankExercise = (exercise: ExerciseData) =>
  exercise.type === 'blank' && exercise.starter_code.trim() === '{{blank1}}';

const sanitizeExercisesAgainstTheory = (
  lessons: LessonData[],
  exercises: ExerciseData[]
): ExerciseData[] => {
  const lessonById = new Map(lessons.map(lesson => [lesson.id, lesson]));

  return exercises.map(exercise => {
    if (!isStandaloneBlankExercise(exercise)) return exercise;

    const answer = getSingleBlankAnswer(exercise);
    if (!answer) return exercise;

    const lesson = lessonById.get(exercise.lesson_id);
    if (!lesson) return exercise;

    const lessonCorpus = normalizeTheoryText(
      [
        lesson.title,
        lesson.content,
        lesson.concept,
        ...(lesson.tags ?? []),
      ].join(' ')
    );
    const normalizedAnswer = normalizeTheoryText(answer);

    if (hasTermInText(lessonCorpus, normalizedAnswer)) return exercise;

    const safeAnswer = lesson.title.trim() || lesson.concept.trim() || answer;
    return {
      ...exercise,
      prompt: 'Prática guiada: com base na teoria acima, qual é o tema principal desta lição?',
      starter_code: '{{blank1}}',
      validations: [
        {
          type: 'blank',
          blanks: [
            {
              id: 'blank1',
              answer: safeAnswer,
              placeholder: 'resposta',
            },
          ],
        },
      ],
      hints: [
        { level: 1, text: 'Releia o título e o objetivo da lição.' },
        { level: 2, text: 'A resposta está explícita no conteúdo teórico acima.' },
        { level: 3, text: `Resposta esperada: ${safeAnswer}` },
      ],
      solution: safeAnswer,
    };
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
    const hydrated: LearningDb = {
      ...DEFAULT_DB,
      ...parsed,
      loadedModules: parsed.loadedModules ?? [],
      moduleDiagnostics: parsed.moduleDiagnostics ?? [],
      moduleProjects: parsed.moduleProjects ?? [],
      attemptLog: parsed.attemptLog ?? [],
      weeklyGoals: parsed.weeklyGoals ?? {},
      userProgress: parsed.userProgress ?? [],
      userStats: parsed.userStats ?? {},
    };
    const shouldReloadSeed = (parsed.seedRevision ?? '') !== SEED_REVISION;

    if (shouldReloadSeed) {
      return {
        ...hydrated,
        modules: [],
        lessons: [],
        exercises: [],
        loadedModules: [],
        seedRevision: SEED_REVISION,
      };
    }

    return {
      ...hydrated,
      seedRevision: SEED_REVISION,
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
        const normalizedLessons = normalizeLessons(payload.lessons);
        const normalizedPayload: ModulePayload = {
          module: payload.module,
          lessons: normalizedLessons,
          exercises: sanitizeExercisesAgainstTheory(normalizedLessons, payload.exercises),
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
    exercises: sanitizeExercisesAgainstTheory(
      normalizeLessons(fallbackPayload.lessons),
      fallbackPayload.exercises
    ),
  };

  payloadCache.set(moduleId, normalizedFallback);
  return normalizedFallback;
};

const mergeModuleData = (db: LearningDb, payload: ModulePayload): LearningDb => {
  const sanitizedExercises = sanitizeExercisesAgainstTheory(payload.lessons, payload.exercises);
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
    .concat(sanitizedExercises);

  const loaded = new Set(db.loadedModules ?? []);
  loaded.add(payload.module.id);

  return {
    ...db,
    modules: nextModules,
    lessons: nextLessons,
    exercises: nextExercises,
    loadedModules: Array.from(loaded),
    seedRevision: SEED_REVISION,
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
    seedRevision: SEED_REVISION,
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

const getDiagnosticRecord = (db: LearningDb, userId: string, moduleId: string) => {
  const key = diagnosticRecordKey(userId, moduleId);
  return (db.moduleDiagnostics ?? []).find(record =>
    diagnosticRecordKey(record.user_id, record.module_id) === key
  ) ?? null;
};

const getProjectRecord = (db: LearningDb, userId: string, moduleId: string) =>
  (db.moduleProjects ?? []).find(record => record.user_id === userId && record.module_id === moduleId) ?? null;

const getWeekXpFromAttemptLog = (
  attempts: AttemptLogEntry[],
  userId: string,
  now: Date = new Date()
) => {
  const weekStart = getWeekStart(now);
  const weekEnd = getWeekEnd(now);

  return attempts
    .filter(item => item.user_id === userId)
    .filter(item => isWithinInterval(new Date(item.created_at), weekStart, weekEnd))
    .reduce((sum, item) => sum + item.xp_earned, 0);
};

const computeModuleDiagnosticRecommendation = (
  lessons: LessonData[],
  masteredLessonIds: string[]
) => {
  const mastered = new Set(masteredLessonIds);
  const sorted = [...lessons].sort((a, b) => a.order - b.order);

  for (const lesson of sorted) {
    const prerequisites = lesson.prerequisites ?? [];
    const unlocked = prerequisites.every(id => mastered.has(id));
    if (!unlocked) continue;
    if (!mastered.has(lesson.id)) return lesson.id;
  }

  return sorted[0]?.id ?? null;
};

const ensureWeeklyGoal = (db: LearningDb, userId: string) => {
  const existing = db.weeklyGoals?.[userId];
  if (typeof existing === 'number' && existing > 0) return existing;
  return DEFAULT_WEEKLY_GOAL_XP;
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
    moduleDiagnostics: db.moduleDiagnostics ?? [],
    moduleProjects: db.moduleProjects ?? [],
    attemptLog: db.attemptLog ?? [],
    weeklyGoals: db.weeklyGoals ?? {},
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

export type ModuleDiagnosticQuestion = {
  id: string;
  exercise_id: string;
  lesson_id: string;
  lesson_title: string;
  prompt: string;
  options: string[];
  answer: string;
};

const deterministicShuffle = <T,>(items: T[], seed: string) => {
  const output = [...items];
  let hash = 0;
  for (let i = 0; i < seed.length; i += 1) {
    hash = (hash * 31 + seed.charCodeAt(i)) >>> 0;
  }
  hash = hash || 1;

  for (let idx = output.length - 1; idx > 0; idx -= 1) {
    hash = (hash * 1664525 + 1013904223) >>> 0;
    const swap = hash % (idx + 1);
    [output[idx], output[swap]] = [output[swap], output[idx]];
  }

  return output;
};

const buildOptionsForAnswer = (answer: string, pool: string[], seed: string) => {
  const unique = new Map<string, string>();
  unique.set(answer.toLowerCase(), answer);

  for (const candidate of pool) {
    if (!candidate.trim()) continue;
    const key = candidate.toLowerCase();
    if (unique.has(key)) continue;
    unique.set(key, candidate);
    if (unique.size >= 4) break;
  }

  const options = Array.from(unique.values()).slice(0, 4);
  return deterministicShuffle(options, seed);
};

export const getModuleDiagnosticQuestions = (
  moduleId: string,
  count: number = MODULE_DIAGNOSTIC_QUESTION_COUNT
): ModuleDiagnosticQuestion[] => {
  const db = loadDb();
  const lessons = db.lessons
    .filter(lesson => lesson.module_id === moduleId)
    .sort((a, b) => a.order - b.order);
  const lessonById = new Map(lessons.map(lesson => [lesson.id, lesson]));

  const candidates = db.exercises
    .filter(exercise => lessonById.has(exercise.lesson_id))
    .map(exercise => {
      const blankValidation = exercise.validations.find(item => item.type === 'blank');
      if (!blankValidation || blankValidation.blanks.length !== 1) return null;
      if (exercise.type !== 'blank') return null;
      const answer = blankValidation.blanks[0].answer.trim();
      if (!answer) return null;
      if (isLikelyCodeFragment(answer)) return null;
      const lesson = lessonById.get(exercise.lesson_id);
      if (!lesson) return null;
      return {
        exercise,
        lesson,
        answer,
      };
    })
    .filter(
      (
        item
      ): item is {
        exercise: ExerciseData;
        lesson: LessonData;
        answer: string;
      } => Boolean(item)
    );

  if (!candidates.length) return [];

  const uniqueByLesson = new Map<string, { exercise: ExerciseData; lesson: LessonData; answer: string }>();
  for (const candidate of candidates) {
    if (!uniqueByLesson.has(candidate.lesson.id)) {
      uniqueByLesson.set(candidate.lesson.id, candidate);
    }
  }

  const selected = Array.from(uniqueByLesson.values()).slice(0, count);
  const answerPool = Array.from(new Set(candidates.map(item => item.answer)));

  return selected.map((item, index) => ({
    id: `diagnostic-${moduleId}-${index + 1}`,
    exercise_id: item.exercise.id,
    lesson_id: item.lesson.id,
    lesson_title: item.lesson.title,
    prompt: item.exercise.prompt,
    answer: item.answer,
    options: buildOptionsForAnswer(
      item.answer,
      answerPool.filter(value => value.toLowerCase() !== item.answer.toLowerCase()),
      `${moduleId}-${item.exercise.id}`
    ),
  }));
};

export const getModuleDiagnostic = (
  moduleId: string,
  userId: string = DEFAULT_USER_ID
): ModuleDiagnosticRecord | null => {
  const db = loadDb();
  return getDiagnosticRecord(db, userId, moduleId);
};

export const saveModuleDiagnostic = (params: {
  userId?: string;
  moduleId: string;
  score: number;
  questionCount: number;
  masteredLessonIds: string[];
}) => {
  const {
    userId = DEFAULT_USER_ID,
    moduleId,
    score,
    questionCount,
    masteredLessonIds,
  } = params;

  const db = loadDb();
  const nowIso = new Date().toISOString();
  const moduleLessons = db.lessons.filter(lesson => lesson.module_id === moduleId);
  const recommendedLessonId = computeModuleDiagnosticRecommendation(moduleLessons, masteredLessonIds);

  const record: ModuleDiagnosticRecord = {
    user_id: userId,
    module_id: moduleId,
    score,
    question_count: questionCount,
    mastered_lesson_ids: Array.from(new Set(masteredLessonIds)),
    recommended_lesson_id: recommendedLessonId,
    created_at: nowIso,
    updated_at: nowIso,
  };

  const existing = getDiagnosticRecord(db, userId, moduleId);
  const nextDiagnostics = existing
    ? (db.moduleDiagnostics ?? []).map(item =>
        item.user_id === userId && item.module_id === moduleId
          ? {
              ...record,
              created_at: item.created_at,
            }
          : item
      )
    : [...(db.moduleDiagnostics ?? []), record];

  const nextDb: LearningDb = {
    ...db,
    moduleDiagnostics: nextDiagnostics,
  };

  saveDb(nextDb);
  return record;
};

export const getModuleProject = (
  moduleId: string,
  userId: string = DEFAULT_USER_ID
): ModuleProjectSubmission | null => {
  const db = loadDb();
  return getProjectRecord(db, userId, moduleId);
};

export const getModuleProjectStatus = (
  moduleId: string,
  userId: string = DEFAULT_USER_ID
) => {
  const submission = getModuleProject(moduleId, userId);
  if (!submission) {
    return {
      submitted: false,
      score: 0,
      submittedAt: null as string | null,
    };
  }

  return {
    submitted: true,
    score: submission.score,
    submittedAt: submission.submitted_at,
  };
};

export const saveModuleProject = (params: {
  userId?: string;
  moduleId: string;
  score: number;
  checklist: { id: string; checked: boolean }[];
  notes?: string;
  projectUrl?: string;
}) => {
  const {
    userId = DEFAULT_USER_ID,
    moduleId,
    score,
    checklist,
    notes,
    projectUrl,
  } = params;

  const db = loadDb();
  const submission: ModuleProjectSubmission = {
    user_id: userId,
    module_id: moduleId,
    score,
    checklist,
    notes: notes?.trim() || undefined,
    project_url: projectUrl?.trim() || undefined,
    submitted_at: new Date().toISOString(),
  };

  const existing = getProjectRecord(db, userId, moduleId);
  const nextProjects = existing
    ? (db.moduleProjects ?? []).map(item =>
        item.user_id === userId && item.module_id === moduleId ? submission : item
      )
    : [...(db.moduleProjects ?? []), submission];

  const nextDb: LearningDb = {
    ...db,
    moduleProjects: nextProjects,
  };

  saveDb(nextDb);
  return submission;
};

export const getWeeklyProgress = (userId: string = DEFAULT_USER_ID, now: Date = new Date()) => {
  const db = loadDb();
  const earnedXp = getWeekXpFromAttemptLog(db.attemptLog ?? [], userId, now);
  const goalXp = ensureWeeklyGoal(db, userId);
  const percent = goalXp > 0 ? Math.min(100, Math.round((earnedXp / goalXp) * 100)) : 0;

  return {
    weekKey: getWeekKey(now),
    earnedXp,
    goalXp,
    remainingXp: Math.max(0, goalXp - earnedXp),
    percent,
  };
};

export const setWeeklyGoal = (goalXp: number, userId: string = DEFAULT_USER_ID) => {
  const db = loadDb();
  const normalizedGoal = Math.max(50, Math.round(goalXp));
  const nextDb: LearningDb = {
    ...db,
    weeklyGoals: {
      ...(db.weeklyGoals ?? {}),
      [userId]: normalizedGoal,
    },
  };
  saveDb(nextDb);
  return normalizedGoal;
};

export const getWeeklyLeaderboard = (params?: {
  userId?: string;
  now?: Date;
  limit?: number;
}) => {
  const { userId = DEFAULT_USER_ID, now = new Date(), limit = 5 } = params ?? {};
  const db = loadDb();
  const attempts = db.attemptLog ?? [];
  const weekStart = getWeekStart(now);
  const weekEnd = getWeekEnd(now);

  const totals = new Map<string, number>();
  for (const attempt of attempts) {
    const createdAt = new Date(attempt.created_at);
    if (!isWithinInterval(createdAt, weekStart, weekEnd)) continue;
    totals.set(attempt.user_id, (totals.get(attempt.user_id) ?? 0) + attempt.xp_earned);
  }

  if (!totals.has(userId)) {
    totals.set(userId, 0);
  }

  return Array.from(totals.entries())
    .map(([entryUserId, xp]) => ({
      userId: entryUserId,
      label: entryUserId === userId ? 'Voce' : `Aluno ${entryUserId.slice(0, 6)}`,
      xp,
    }))
    .sort((a, b) => b.xp - a.xp)
    .slice(0, limit);
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

export const getDailyReviewExercises = (
  userId: string = DEFAULT_USER_ID,
  minItems: number = DAILY_REVIEW_MIN,
  maxItems: number = DAILY_REVIEW_MAX
) => {
  const db = loadDb();
  const due = getDueExercises(userId, maxItems);

  if (due.length >= minItems) return due.slice(0, maxItems);

  const dueIds = new Set(due.map(exercise => exercise.id));
  const userProgress = db.userProgress.filter(progress => progress.user_id === userId);
  const conceptWeakness = new Map<string, number>();

  for (const progress of userProgress) {
    const key = progress.concept || 'geral';
    const correct = progress.total_correct;
    const wrong = getProgressWrongCount(progress);
    const totals = conceptWeakness.get(key) ?? 0;
    const attempts = correct + wrong;
    const weakness = attempts > 0 ? wrong / attempts : 0;
    conceptWeakness.set(key, Math.max(totals, weakness));
  }

  const lessonsById = new Map(db.lessons.map(lesson => [lesson.id, lesson]));
  const reinforcementPool = db.exercises
    .filter(exercise => !dueIds.has(exercise.id))
    .map(exercise => {
      const lesson = lessonsById.get(exercise.lesson_id);
      if (!lesson) return null;
      const progress = userProgress.find(item => item.exercise_id === exercise.id);
      const attempts = (progress?.total_correct ?? 0) + getProgressWrongCount(progress);
      if (attempts <= 0) return null;
      const seenPenalty = attempts > 0 ? 0.1 : 0;
      const weakness = conceptWeakness.get(lesson.concept) ?? 0;
      const priority = weakness + seenPenalty;

      return {
        exercise,
        priority,
      };
    })
    .filter((item): item is { exercise: ExerciseData; priority: number } => Boolean(item))
    .sort((a, b) => b.priority - a.priority)
    .map(item => item.exercise);

  const queue = [...due];
  for (const exercise of reinforcementPool) {
    if (queue.length >= Math.max(minItems, maxItems)) break;
    if (queue.some(item => item.id === exercise.id)) continue;
    queue.push(exercise);
  }

  return queue.slice(0, maxItems);
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

  const attemptEntry: AttemptLogEntry = {
    user_id: userId,
    exercise_id: exerciseId,
    concept,
    correct,
    xp_earned: correct ? getXpForExercise(exercise) : 0,
    created_at: now.toISOString(),
  };

  const nextDb: LearningDb = {
    ...db,
    userProgress: nextProgress,
    attemptLog: [...(db.attemptLog ?? []), attemptEntry],
    weeklyGoals: {
      ...(db.weeklyGoals ?? {}),
      [userId]: ensureWeeklyGoal(db, userId),
    },
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
