import { describe, expect, it } from 'vitest';
import { validateExercise } from '@/lib/validators/exerciseValidator';
import { validateHtmlStructure } from '@/lib/validators/htmlValidator';
import type { ExerciseData } from '@/types/learning';

describe('validateExercise', () => {
  it('validates blank exercises', async () => {
    const exercise: ExerciseData = {
      id: 'ex1',
      lesson_id: 'lesson1',
      type: 'blank',
      prompt: 'Complete',
      starter_code: 'const {{blank1}} = 1;',
      validations: [
        {
          type: 'blank',
          blanks: [{ id: 'blank1', answer: 'total', placeholder: '____' }],
        },
      ],
      hints: [],
      solution: 'const total = 1;',
      difficulty: 'easy',
      estimated_time: 30,
    };

    const result = await validateExercise(exercise, { blanks: { blank1: 'total' } });
    expect(result.passed).toBe(true);
  });

  it('validates js tests', async () => {
    const exercise: ExerciseData = {
      id: 'ex2',
      lesson_id: 'lesson1',
      type: 'code',
      prompt: 'Crie soma',
      starter_code: '',
      validations: [
        {
          type: 'js-tests',
          tests: [
            {
              name: 'soma funciona',
              code: "assert(soma(2, 3) === 5, 'soma deve funcionar');",
            },
          ],
        },
      ],
      hints: [],
      solution: 'function soma(a, b) { return a + b; }',
      difficulty: 'easy',
      estimated_time: 30,
    };

    const result = await validateExercise(exercise, {
      code: 'function soma(a, b) { return a + b; }',
    });

    expect(result.passed).toBe(true);
  });
});

describe('validateHtmlStructure', () => {
  it('checks required class', () => {
    const result = validateHtmlStructure('<div class="card"></div>', '', {
      type: 'html-structure',
      requiredClasses: ['card'],
    });
    expect(result.passed).toBe(true);
  });
});
