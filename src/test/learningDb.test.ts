import { describe, expect, it } from 'vitest';
import { applySpacedRepetition } from '@/lib/learningDb';

describe('applySpacedRepetition', () => {
  it('schedules next review on correct answer', () => {
    const now = new Date('2026-02-03T10:00:00Z');
    const updated = applySpacedRepetition(
      {
        user_id: 'u1',
        exercise_id: 'ex1',
        concept: 'variaveis',
        ease: 2.5,
        interval_days: 0,
        due_at: now.toISOString(),
        streak_correct: 0,
        total_correct: 0,
        last_result: 'wrong',
        updated_at: now.toISOString(),
      },
      true,
      now
    );

    const due = new Date(updated.due_at);
    expect(updated.interval_days).toBe(1);
    expect(updated.ease).toBeCloseTo(2.55, 2);
    expect(updated.last_result).toBe('correct');
    expect(due.getUTCDate()).toBe(4);
  });

  it('resets interval on wrong answer', () => {
    const now = new Date('2026-02-03T10:00:00Z');
    const updated = applySpacedRepetition(
      {
        user_id: 'u1',
        exercise_id: 'ex1',
        concept: 'variaveis',
        ease: 2.0,
        interval_days: 4,
        due_at: now.toISOString(),
        streak_correct: 2,
        total_correct: 2,
        last_result: 'correct',
        updated_at: now.toISOString(),
      },
      false,
      now
    );

    expect(updated.interval_days).toBe(1);
    expect(updated.ease).toBeCloseTo(1.8, 2);
    expect(updated.streak_correct).toBe(0);
    expect(updated.last_result).toBe('wrong');
  });
});
