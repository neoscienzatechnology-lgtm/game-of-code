import { useState } from 'react';
import { Header } from '@/components/Header';
import { HomeScreen } from '@/components/HomeScreen';
import { ExerciseView } from '@/components/ExerciseView';
import { LessonComplete } from '@/components/LessonComplete';
import { useGameState } from '@/hooks/useGameState';

const Index = () => {
  const {
    totalXp,
    hearts,
    maxHearts,
    streak,
    completedLessons,
    currentLesson,
    currentExerciseIndex,
    lessons,
    courses,
    activeCourseId,
    addXp,
    loseHeart,
    increaseStreak,
    completeExercise,
    completeLesson,
    startLesson,
    nextExercise,
    exitLesson,
    setActiveCourse,
    getLessonProgress,
  } = useGameState();

  const [showLessonComplete, setShowLessonComplete] = useState(false);
  const [lessonXpEarned, setLessonXpEarned] = useState(0);

  const currentLessonData = lessons.find(l => l.id === currentLesson);
  const activeCourse = courses.find(course => course.id === activeCourseId) ?? courses[0];
  const courseUnits = activeCourse?.units ?? [];
  const courseLessons = courseUnits.flatMap(unit => unit.lessons);

  const handleCorrect = (xp: number) => {
    addXp(xp);
    increaseStreak();
    setLessonXpEarned(prev => prev + xp);
    if (currentLessonData) {
      completeExercise(currentLessonData.exercises[currentExerciseIndex].id);
    }
  };

  const handleWrong = () => {
    loseHeart();
  };

  const handleNext = () => {
    nextExercise();
  };

  const handleComplete = () => {
    if (currentLesson) {
      completeLesson(currentLesson);
      setShowLessonComplete(true);
    }
  };

  const handleContinueFromComplete = () => {
    setShowLessonComplete(false);
    setLessonXpEarned(0);
    exitLesson();
  };

  const handleStartLesson = (lessonId: string) => {
    setLessonXpEarned(0);
    startLesson(lessonId);
  };

  const handleExitLesson = () => {
    setLessonXpEarned(0);
    exitLesson();
  };

  // Show lesson complete screen
  if (showLessonComplete && currentLessonData) {
    return (
      <LessonComplete
        lesson={currentLessonData}
        xpEarned={lessonXpEarned}
        onContinue={handleContinueFromComplete}
      />
    );
  }

  // Show exercise view
  if (currentLesson && currentLessonData) {
    return (
      <ExerciseView
        lesson={currentLessonData}
        currentExerciseIndex={currentExerciseIndex}
        onCorrect={handleCorrect}
        onWrong={handleWrong}
        onNext={handleNext}
        onComplete={handleComplete}
        onExit={handleExitLesson}
        hearts={hearts}
      />
    );
  }

  // Show home screen
  return (
    <>
      <Header hearts={hearts} maxHearts={maxHearts} xp={totalXp} streak={streak} />
      <HomeScreen
        courses={courses}
        activeCourseId={activeCourseId}
        onCourseChange={setActiveCourse}
        units={courseUnits}
        lessons={courseLessons}
        completedLessons={completedLessons}
        getLessonProgress={getLessonProgress}
        onStartLesson={handleStartLesson}
        totalXp={totalXp}
        streak={streak}
      />
    </>
  );
};

export default Index;
