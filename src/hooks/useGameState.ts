import { useState, useEffect } from 'react';
import { htmlLessons, htmlUnits, Lesson } from '@/data/htmlLessons';

interface GameState {
  totalXp: number;
  hearts: number;
  maxHearts: number;
  streak: number;
  completedLessons: string[];
  completedExercises: string[];
  currentLesson: string | null;
  currentExerciseIndex: number;
  lastHeartRefill: number;
}

const INITIAL_STATE: GameState = {
  totalXp: 0,
  hearts: 5,
  maxHearts: 5,
  streak: 0,
  completedLessons: [],
  completedExercises: [],
  currentLesson: null,
  currentExerciseIndex: 0,
  lastHeartRefill: Date.now(),
};

const HEART_REFILL_INTERVAL_MS = 15 * 60 * 1000;

export function useGameState() {
  const [gameState, setGameState] = useState<GameState>(() => {
    const saved = localStorage.getItem('mimo-game-state');
    if (!saved) return INITIAL_STATE;

    const parsed = JSON.parse(saved) as Partial<GameState>;
    return {
      ...INITIAL_STATE,
      ...parsed,
    };
  });

  useEffect(() => {
    localStorage.setItem('mimo-game-state', JSON.stringify(gameState));
  }, [gameState]);

  useEffect(() => {
    const interval = setInterval(() => {
      setGameState(prev => {
        if (prev.hearts >= prev.maxHearts) {
          if (Date.now() - prev.lastHeartRefill < HEART_REFILL_INTERVAL_MS) {
            return prev;
          }
          return {
            ...prev,
            lastHeartRefill: Date.now(),
          };
        }

        const now = Date.now();
        const elapsed = now - prev.lastHeartRefill;
        if (elapsed < HEART_REFILL_INTERVAL_MS) return prev;

        const heartsToAdd = Math.floor(elapsed / HEART_REFILL_INTERVAL_MS);
        const nextHearts = Math.min(prev.maxHearts, prev.hearts + heartsToAdd);
        const nextRefill = prev.lastHeartRefill + heartsToAdd * HEART_REFILL_INTERVAL_MS;

        return {
          ...prev,
          hearts: nextHearts,
          lastHeartRefill: nextRefill,
        };
      });
    }, 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  const addXp = (amount: number) => {
    setGameState(prev => ({
      ...prev,
      totalXp: prev.totalXp + amount,
    }));
  };

  const loseHeart = () => {
    setGameState(prev => ({
      ...prev,
      hearts: Math.max(0, prev.hearts - 1),
      lastHeartRefill: prev.hearts === prev.maxHearts ? Date.now() : prev.lastHeartRefill,
      streak: 0,
    }));
  };

  const increaseStreak = () => {
    setGameState(prev => ({
      ...prev,
      streak: prev.streak + 1,
    }));
  };

  const completeExercise = (exerciseId: string) => {
    setGameState(prev => ({
      ...prev,
      completedExercises: prev.completedExercises.includes(exerciseId)
        ? prev.completedExercises
        : [...prev.completedExercises, exerciseId],
    }));
  };

  const completeLesson = (lessonId: string) => {
    setGameState(prev => ({
      ...prev,
      completedLessons: prev.completedLessons.includes(lessonId)
        ? prev.completedLessons
        : [...prev.completedLessons, lessonId],
    }));
  };

  const startLesson = (lessonId: string) => {
    setGameState(prev => ({
      ...prev,
      currentLesson: lessonId,
      currentExerciseIndex: 0,
    }));
  };

  const nextExercise = () => {
    setGameState(prev => ({
      ...prev,
      currentExerciseIndex: prev.currentExerciseIndex + 1,
    }));
  };

  const exitLesson = () => {
    setGameState(prev => ({
      ...prev,
      currentLesson: null,
      currentExerciseIndex: 0,
    }));
  };

  const resetProgress = () => {
    setGameState(INITIAL_STATE);
  };

  const refillHearts = () => {
    setGameState(prev => ({
      ...prev,
      hearts: prev.maxHearts,
      lastHeartRefill: Date.now(),
    }));
  };

  const getLessonProgress = (lessonId: string): number => {
    const lesson = htmlLessons.find(l => l.id === lessonId);
    if (!lesson) return 0;
    
    const completed = lesson.exercises.filter(ex => 
      gameState.completedExercises.includes(ex.id)
    ).length;
    
    return Math.round((completed / lesson.exercises.length) * 100);
  };

  return {
    ...gameState,
    lessons: htmlLessons,
    units: htmlUnits,
    addXp,
    loseHeart,
    increaseStreak,
    completeExercise,
    completeLesson,
    startLesson,
    nextExercise,
    exitLesson,
    resetProgress,
    refillHearts,
    getLessonProgress,
  };
}
