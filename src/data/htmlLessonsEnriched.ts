import { htmlUnits, type Exercise, type Lesson, type Unit } from './htmlLessons';

const normalize = (value: string) => value.toLowerCase();

const extractTokens = (exercise: Exercise): string[] => {
  if (exercise.type === 'fill-blank' && exercise.blanks?.length) {
    return exercise.blanks.map(blank => blank.answer);
  }

  if (exercise.type === 'multiple-choice' && exercise.options?.length) {
    const correct = exercise.options.find(option => option.correct);
    return correct ? [correct.text] : [];
  }

  return [];
};

const buildFilledTemplate = (exercise: Exercise) => {
  if (!exercise.codeTemplate || !exercise.blanks?.length) return '';
  return exercise.codeTemplate.replace(/\{\{(blank\d+)\}\}/g, (_, id) => {
    const blank = exercise.blanks?.find(item => item.id === id);
    return blank?.answer ?? '';
  });
};

const buildPrimerExplanation = (exercise: Exercise) => {
  const filled = buildFilledTemplate(exercise);
  if (filled) {
    return `Exemplo correto: \`${filled}\``;
  }

  const tokens = extractTokens(exercise);
  if (tokens.length) {
    return `Resposta correta: **${tokens.join(', ')}**.`;
  }

  return 'Revise a teoria acima antes de responder.';
};

const shouldInsertPrimer = (exercise: Exercise, priorInfoText: string) => {
  if (exercise.type === 'info') return false;
  const tokens = extractTokens(exercise);
  if (!tokens.length) return true;

  const text = normalize(priorInfoText);
  return !tokens.every(token => text.includes(normalize(token)));
};

const addPrimersToLesson = (lesson: Lesson): Lesson => {
  let infoBuffer = '';

  const nextExercises = lesson.exercises.flatMap(exercise => {
    if (exercise.type === 'info') {
      const text = `${exercise.instruction ?? ''} ${exercise.explanation ?? ''}`.trim();
      infoBuffer = `${infoBuffer} ${text}`;
      return [exercise];
    }

    if (!shouldInsertPrimer(exercise, infoBuffer)) {
      return [exercise];
    }

    const primer: Exercise = {
      id: `${exercise.id}-primer`,
      type: 'info',
      instruction: 'Revisão rápida',
      explanation: buildPrimerExplanation(exercise),
      xp: 0,
    };

    const primerText = `${primer.instruction ?? ''} ${primer.explanation ?? ''}`.trim();
    infoBuffer = `${infoBuffer} ${primerText}`;
    return [primer, exercise];
  });

  return {
    ...lesson,
    exercises: nextExercises,
  };
};

export const htmlUnitsEnriched: Unit[] = htmlUnits.map(unit => ({
  ...unit,
  lessons: unit.lessons.map(addPrimersToLesson),
}));

export const htmlLessonsEnriched: Lesson[] = htmlUnitsEnriched.flatMap(unit => unit.lessons);
