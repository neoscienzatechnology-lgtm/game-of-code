import type { ExerciseData, LessonData, UserProgress } from '@/types/learning';

export const LESSON_MASTERY_THRESHOLD = 0.8;

export interface LessonMasteryStatus {
  lessonId: string;
  completed: number;
  total: number;
  accuracy: number;
  mastered: boolean;
}

export const getRecentWrongWeight = (progress?: UserProgress) => {
  if (!progress) return 0;
  // Se acertou na última e tem uma ofensiva, o peso do erro no "domínio da lição" cai muito.
  if (progress.last_result === 'correct' && progress.streak_correct > 0) {
    // Reduz dramaticamente o impacto dos erros históricos se o usuário já provou que aprendeu
    return Math.max(0, (progress.total_wrong ?? 0) - (progress.streak_correct * 2));
  }
  return progress.total_wrong ?? (progress.last_result === 'wrong' ? 1 : 0);
};

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
    const wrong = getRecentWrongWeight(progress);

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

