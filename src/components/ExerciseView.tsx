import { useState, useEffect } from 'react';
import { X, ArrowRight, Check, Zap } from 'lucide-react';
import { Exercise, Lesson } from '@/data/htmlLessons';
import { Button } from '@/components/ui/button';

interface ExerciseViewProps {
  lesson: Lesson;
  currentExerciseIndex: number;
  onCorrect: (xp: number) => void;
  onWrong: () => void;
  onNext: () => void;
  onComplete: () => void;
  onExit: () => void;
  hearts: number;
}

export function ExerciseView({
  lesson,
  currentExerciseIndex,
  onCorrect,
  onWrong,
  onNext,
  onComplete,
  onExit,
  hearts,
}: ExerciseViewProps) {
  const exercise = lesson.exercises[currentExerciseIndex];
  const progress = ((currentExerciseIndex + 1) / lesson.exercises.length) * 100;
  const isLastExercise = currentExerciseIndex === lesson.exercises.length - 1;

  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showResult, setShowResult] = useState<'correct' | 'wrong' | null>(null);
  const [showCelebration, setShowCelebration] = useState(false);

  useEffect(() => {
    setAnswers({});
    setSelectedOption(null);
    setShowResult(null);
    setShowCelebration(false);
  }, [currentExerciseIndex]);

  const handleCheckAnswer = () => {
    if (exercise.type === 'info') {
      handleContinue();
      return;
    }

    let isCorrect = false;

    if (exercise.type === 'fill-blank' && exercise.blanks) {
      isCorrect = exercise.blanks.every(blank => 
        answers[blank.id]?.trim().toLowerCase() === blank.answer.toLowerCase()
      );
    } else if (exercise.type === 'multiple-choice' && exercise.options) {
      const correctOption = exercise.options.find(opt => opt.correct);
      isCorrect = selectedOption === correctOption?.id;
    }

    if (isCorrect) {
      setShowResult('correct');
      setShowCelebration(true);
      onCorrect(exercise.xp);
    } else {
      setShowResult('wrong');
      onWrong();
    }
  };

  const handleContinue = () => {
    if (isLastExercise) {
      onComplete();
    } else {
      onNext();
    }
  };

  const renderCode = () => {
    if (!exercise.codeTemplate) return null;

    const parts = exercise.codeTemplate.split(/(\{\{blank\d+\}\})/g);
    
    return (
      <div className="code-block whitespace-pre-wrap text-base leading-relaxed">
        {parts.map((part, index) => {
          const blankMatch = part.match(/\{\{(blank\d+)\}\}/);
          if (blankMatch && exercise.blanks) {
            const blank = exercise.blanks.find(b => b.id === blankMatch[1]);
            if (!blank) return part;
            
            const isWrong = showResult === 'wrong' && answers[blank.id]?.trim().toLowerCase() !== blank.answer.toLowerCase();
            const isCorrect = showResult === 'correct';
            
            return (
              <input
                key={index}
                type="text"
                value={answers[blank.id] || ''}
                onChange={(e) => setAnswers(prev => ({ ...prev, [blank.id]: e.target.value }))}
                placeholder={blank.placeholder}
                disabled={showResult !== null}
                className={`exercise-input ${
                  isCorrect ? 'exercise-input-correct' : isWrong ? 'exercise-input-wrong' : ''
                }`}
                style={{ width: `${Math.max(blank.placeholder?.length || 4, answers[blank.id]?.length || 0) * 12 + 24}px` }}
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck="false"
              />
            );
          }
          return <span key={index} className="text-muted-foreground">{part}</span>;
        })}
      </div>
    );
  };

  const renderCorrection = () => {
    if (showResult !== 'wrong') return null;

    if (exercise.type === 'fill-blank' && exercise.blanks) {
      return (
        <div className="glass-card p-4 text-center text-sm text-foreground">
          <p className="font-semibold mb-2">Resposta correta</p>
          <div className="flex flex-wrap justify-center gap-2">
            {exercise.blanks.map(blank => (
              <span key={blank.id} className="px-3 py-1 rounded-full bg-success/20 text-success font-mono">
                {blank.answer}
              </span>
            ))}
          </div>
        </div>
      );
    }

    if (exercise.type === 'multiple-choice' && exercise.options) {
      const correctOption = exercise.options.find(option => option.correct);
      if (!correctOption) return null;

      return (
        <div className="glass-card p-4 text-center text-sm text-foreground">
          <p className="font-semibold mb-2">Resposta correta</p>
          <p className="font-mono text-success">{correctOption.text}</p>
        </div>
      );
    }

    return null;
  };

  const correction = renderCorrection();

  const canCheck = () => {
    if (exercise.type === 'info') return true;
    if (exercise.type === 'fill-blank' && exercise.blanks) {
      return exercise.blanks.every(blank => answers[blank.id]?.trim());
    }
    if (exercise.type === 'multiple-choice') {
      return selectedOption !== null;
    }
    return false;
  };

  return (
    <div className="fixed inset-0 bg-background z-50 flex flex-col">
      {/* Header */}
      <div className="px-4 py-3 flex items-center gap-4">
        <button 
          onClick={onExit}
          className="p-2 rounded-lg hover:bg-muted transition-colors"
        >
          <X className="w-6 h-6 text-muted-foreground" />
        </button>
        
        <div className="flex-1 progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${progress}%` }} 
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-4 py-6">
        <div className="max-w-lg mx-auto animate-slide-up">
          {/* Lesson icon */}
          <div className="text-center mb-6">
            <span className="text-4xl">{lesson.icon}</span>
          </div>

          {/* Instruction */}
          <h2 className="text-xl font-bold text-center mb-6">{exercise.instruction}</h2>

          {/* Explanation for info type */}
          {exercise.type === 'info' && exercise.explanation && (
            <div className="glass-card p-6 mb-6">
              <p className="text-muted-foreground leading-relaxed text-center">
                {exercise.explanation.split('`').map((part, i) => 
                  i % 2 === 1 ? (
                    <code key={i} className="bg-primary/20 text-primary px-2 py-0.5 rounded font-mono">
                      {part}
                    </code>
                  ) : (
                    <span key={i}>{part.split('**').map((p, j) => 
                      j % 2 === 1 ? <strong key={j} className="text-foreground">{p}</strong> : p
                    )}</span>
                  )
                )}
              </p>
            </div>
          )}

          {/* Code template */}
          {exercise.type === 'fill-blank' && renderCode()}

          {/* Multiple choice options */}
          {exercise.type === 'multiple-choice' && exercise.options && (
            <div className="space-y-3">
              {exercise.options.map((option) => {
                const isSelected = selectedOption === option.id;
                const isCorrectOption = option.correct;
                const showCorrect = showResult === 'correct' && isSelected;
                const showWrong = showResult === 'wrong' && isSelected;
                const showRightAnswer = showResult === 'wrong' && isCorrectOption;
                
                return (
                  <button
                    key={option.id}
                    onClick={() => !showResult && setSelectedOption(option.id)}
                    disabled={showResult !== null}
                    className={`w-full p-4 rounded-xl border-2 text-left transition-all ${
                      showCorrect || showRightAnswer
                        ? 'border-success bg-success/20 text-success'
                        : showWrong
                          ? 'border-error bg-error/20 text-error animate-shake'
                          : isSelected
                            ? 'border-primary bg-primary/10'
                            : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                        showCorrect || showRightAnswer
                          ? 'border-success bg-success'
                          : showWrong
                            ? 'border-error bg-error'
                            : isSelected
                              ? 'border-primary bg-primary'
                              : 'border-muted-foreground'
                      }`}>
                        {(showCorrect || showRightAnswer) && <Check className="w-4 h-4 text-success-foreground" />}
                      </div>
                      <span className="font-mono">{option.text}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          )}

          {correction && (
            <div className="mt-6">
              {correction}
            </div>
          )}
        </div>
      </div>

      {/* Celebration overlay */}
      {showCelebration && (
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
          <div className="animate-celebrate">
            <div className="text-6xl">🎉</div>
          </div>
        </div>
      )}

      {/* Bottom action */}
      <div className={`p-4 ${
        showResult === 'correct' ? 'bg-success/20' : showResult === 'wrong' ? 'bg-error/20' : 'glass-card rounded-none border-x-0 border-b-0'
      }`}>
        <div className="max-w-lg mx-auto">
          {showResult === 'correct' && (
            <div className="flex items-center gap-2 mb-3 justify-center">
              <Zap className="w-5 h-5 text-xp" />
              <span className="font-bold text-success">+{exercise.xp} XP</span>
            </div>
          )}
          
          {showResult === 'wrong' && hearts > 0 && (
            <p className="text-center text-error mb-3 font-medium">
              Ops! Tente novamente 💪
            </p>
          )}

          {showResult === 'wrong' && hearts === 0 && (
            <p className="text-center text-error mb-3 font-medium">
              Você ficou sem vidas! Descanse um pouco 😴
            </p>
          )}

          {showResult !== null ? (
            <Button
              onClick={handleContinue}
              disabled={hearts === 0}
              className={`w-full h-14 text-lg font-bold rounded-xl transition-all ${
                showResult === 'correct' 
                  ? 'gradient-success glow-success hover:opacity-90' 
                  : hearts > 0 
                    ? 'bg-primary hover:bg-primary/90' 
                    : 'bg-muted'
              }`}
            >
              {isLastExercise ? 'Concluir Lição' : 'Continuar'}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          ) : (
            <Button
              onClick={handleCheckAnswer}
              disabled={!canCheck()}
              className="w-full h-14 text-lg font-bold gradient-primary glow-primary rounded-xl hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {exercise.type === 'info' ? 'Continuar' : 'Verificar'}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
