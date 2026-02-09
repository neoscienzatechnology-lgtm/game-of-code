import type { ExerciseData, LessonData, UserProgress } from '@/types/learning';

export const LESSON_MASTERY_THRESHOLD = 0.8;

export interface LessonMasteryStatus {
  lessonId: string;
  completed: number;
  total: number;
  accuracy: number;
  mastered: boolean;
}

const getWrongAttempts = (progress?: UserProgress) =>
  progress?.total_wrong ?? (progress?.last_result === 'wrong' ? 1 : 0);

export const computeLessonMastery = (
  lessonId: string,
  exercises: ExerciseData[],
  progressByExercise: Record<string, UserProgress>,
  threshold: number = LESSON_MASTERY_THRESHOLD
): LessonMasteryStatus => {
  const lessonExercises = exercises.filter(exercise => exercise.lesson_id === lessonId);

  let completed = 0;
  let totalCorrect = 0;
  let totalWrong = 0;

  for (const exercise of lessonExercises) {
    const progress = progressByExercise[exercise.id];
    const correct = progress?.total_correct ?? 0;
    const wrong = getWrongAttempts(progress);

    if (correct > 0) completed += 1;
    totalCorrect += correct;
    totalWrong += wrong;
  }

  const attempts = totalCorrect + totalWrong;
  const accuracy = attempts > 0 ? totalCorrect / attempts : 0;
  const total = lessonExercises.length;
  const mastered = total > 0 && completed >= total && accuracy >= threshold;

  return {
    lessonId,
    completed,
    total,
    accuracy,
    mastered,
  };
};

export const buildMasteredLessonMap = (
  lessons: LessonData[],
  exercises: ExerciseData[],
  progressByExercise: Record<string, UserProgress>,
  threshold: number = LESSON_MASTERY_THRESHOLD
) => {
  const masteryMap = new Map<string, LessonMasteryStatus>();

  for (const lesson of lessons) {
    masteryMap.set(
      lesson.id,
      computeLessonMastery(lesson.id, exercises, progressByExercise, threshold)
    );
  }

  return masteryMap;
};

export const mergeMasteredLessonIds = (
  masteryMap: Map<string, LessonMasteryStatus>,
  diagnosticMasteredLessonIds: string[] = []
) => {
  const ids = new Set<string>(diagnosticMasteredLessonIds);
  for (const [lessonId, status] of masteryMap.entries()) {
    if (status.mastered) ids.add(lessonId);
  }
  return ids;
};

