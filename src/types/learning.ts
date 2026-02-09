export type ExerciseType = 'blank' | 'bugfix' | 'code';
export type Difficulty = 'easy' | 'medium' | 'hard';

export interface LessonData {
  id: string;
  module_id: string;
  language: string;
  concept: string;
  title: string;
  content: string;
  order: number;
  tags: string[];
  prerequisites?: string[];
}

export interface ExerciseHint {
  level: number;
  text: string;
}

export interface BlankField {
  id: string;
  answer: string;
  placeholder?: string;
}

export type ExerciseValidation =
  | {
      type: 'blank';
      blanks: BlankField[];
    }
  | {
      type: 'js-tests';
      tests: { name: string; code: string }[];
    }
  | {
      type: 'js-output';
      functionName: string;
      cases: { input: unknown[]; expected: unknown }[];
    }
  | {
      type: 'html-structure';
      requiredTags?: string[];
      requiredSelectors?: string[];
      requiredClasses?: string[];
      requiredAttributes?: { selector: string; name: string; value?: string }[];
      requiredCss?: { selector: string; property: string; value?: string }[];
    };

export interface ExerciseData {
  id: string;
  lesson_id: string;
  type: ExerciseType;
  prompt: string;
  starter_code: string;
  validations: ExerciseValidation[];
  hints: ExerciseHint[];
  solution: string;
  difficulty: Difficulty;
  estimated_time: number;
}

export interface ModuleData {
  id: string;
  language: string;
  title: string;
  description: string;
  order: number;
  tags: string[];
}

export interface UserProgress {
  user_id: string;
  exercise_id: string;
  concept: string;
  ease: number;
  interval_days: number;
  due_at: string;
  streak_correct: number;
  total_correct: number;
  total_wrong?: number;
  last_result: 'correct' | 'wrong';
  updated_at: string;
}

export interface UserStats {
  user_id: string;
  xp: number;
  streak_days: number;
  last_active_date: string | null;
  protection_used_at: string | null;
}

export interface ModuleDiagnosticRecord {
  user_id: string;
  module_id: string;
  score: number;
  question_count: number;
  mastered_lesson_ids: string[];
  recommended_lesson_id: string | null;
  created_at: string;
  updated_at: string;
}

export interface ProjectChecklistItemResult {
  id: string;
  checked: boolean;
}

export interface ModuleProjectSubmission {
  user_id: string;
  module_id: string;
  score: number;
  checklist: ProjectChecklistItemResult[];
  notes?: string;
  project_url?: string;
  submitted_at: string;
}

export interface AttemptLogEntry {
  user_id: string;
  exercise_id: string;
  concept: string;
  correct: boolean;
  xp_earned: number;
  created_at: string;
}

export interface LearningDb {
  modules: ModuleData[];
  lessons: LessonData[];
  exercises: ExerciseData[];
  loadedModules?: string[];
  seedRevision?: string;
  moduleDiagnostics?: ModuleDiagnosticRecord[];
  moduleProjects?: ModuleProjectSubmission[];
  attemptLog?: AttemptLogEntry[];
  weeklyGoals?: Record<string, number>;
  userProgress: UserProgress[];
  userStats: Record<string, UserStats>;
}

export interface LearningSeed {
  modules: ModuleData[];
  lessons: LessonData[];
  exercises: ExerciseData[];
}

export interface ValidationResult {
  passed: boolean;
  error?: string;
  failedCase?: string;
  friendlyMessage?: string;
}
