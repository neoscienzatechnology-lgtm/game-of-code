import { useEffect, useMemo, useState } from 'react';
import { ArrowRight, Check, Lightbulb, X, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { ExerciseData, ExerciseValidation } from '@/types/learning';
import { validateExercise } from '@/lib/validators/exerciseValidator';

interface LearningExerciseSessionProps {
  exercises: ExerciseData[];
  onComplete: () => void;
  onExit?: () => void;
  onAttempt?: (exercise: ExerciseData, correct: boolean) => void;
  getConceptForExercise?: (exerciseId: string) => string | undefined;
}

const getXpForExercise = (exercise: ExerciseData) => {
  if (exercise.difficulty === 'hard') return 30;
  if (exercise.difficulty === 'medium') return 20;
  return 10;
};

const getBlankValidation = (exercise: ExerciseData) =>
  exercise.validations.find(
    validation => validation.type === 'blank'
  ) as Extract<ExerciseValidation, { type: 'blank' }> | undefined;

export function LearningExerciseSession({
  exercises,
  onComplete,
  onExit,
  onAttempt,
  getConceptForExercise,
}: LearningExerciseSessionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [blanks, setBlanks] = useState<Record<string, string>>({});
  const [code, setCode] = useState('');
  const [showResult, setShowResult] = useState<'correct' | 'wrong' | null>(null);
  const [hintLevel, setHintLevel] = useState(0);
  const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined);
  const [checking, setChecking] = useState(false);

  const exercise = exercises[currentIndex];
  const progress = exercises.length ? ((currentIndex + 1) / exercises.length) * 100 : 0;
  const isLastExercise = currentIndex === exercises.length - 1;
  const blankValidation = useMemo(() => getBlankValidation(exercise), [exercise]);

  useEffect(() => {
    setBlanks({});
    setCode(exercise?.starter_code ?? '');
    setShowResult(null);
    setHintLevel(0);
    setErrorMessage(undefined);
    setChecking(false);
  }, [exercise?.id]);

  if (!exercise) {
    return null;
  }

  const canCheck = () => {
    if (exercise.type === 'blank' && blankValidation) {
      return blankValidation.blanks.every(blank => (blanks[blank.id] || '').trim().length > 0);
    }
    return (code || '').trim().length > 0;
  };

  const handleCheck = async () => {
    if (!canCheck()) return;
    setChecking(true);
    const result = await validateExercise(exercise, {
      code,
      blanks,
    });

    if (result.passed) {
      setShowResult('correct');
      setErrorMessage(undefined);
      onAttempt?.(exercise, true);
    } else {
      setShowResult('wrong');
      setErrorMessage(result.friendlyMessage ?? result.error);
      onAttempt?.(exercise, false);
    }
    setChecking(false);
  };

  const handleContinue = () => {
    if (showResult !== 'correct') {
      setShowResult(null);
      setErrorMessage(undefined);
      return;
    }

    if (isLastExercise) {
      onComplete();
    } else {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const renderBlankCode = () => {
    if (!blankValidation) return null;
    const parts = exercise.starter_code.split(/(\{\{blank\d+\}\})/g);

    return (
      <div className="code-block whitespace-pre-wrap text-sm leading-relaxed">
        {parts.map((part, index) => {
          const match = part.match(/\{\{(blank\d+)\}\}/);
          if (!match) return <span key={index}>{part}</span>;
          const blank = blankValidation.blanks.find(field => field.id === match[1]);
          if (!blank) return <span key={index}>{part}</span>;
          const value = blanks[blank.id] || '';

          return (
            <input
              key={index}
              type="text"
              value={value}
              onChange={event =>
                setBlanks(prev => ({ ...prev, [blank.id]: event.target.value }))
              }
              placeholder={blank.placeholder}
              disabled={showResult === 'correct'}
              className={`exercise-input ${
                showResult === 'correct' ? 'exercise-input-correct' : ''
              }`}
              style={{
                width: `${Math.max(blank.placeholder?.length || 4, value.length || 0) * 12 + 24}px`,
              }}
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck="false"
            />
          );
        })}
      </div>
    );
  };

  const conceptLabel = getConceptForExercise?.(exercise.id);
  const hints = exercise.hints.slice(0, hintLevel);

  return (
    <div className="fixed inset-0 bg-background z-50 flex flex-col">
      <div className="px-4 py-3 flex items-center gap-4">
        {onExit && (
          <button onClick={onExit} className="p-2 rounded-lg hover:bg-muted transition-colors">
            <X className="w-6 h-6 text-muted-foreground" />
          </button>
        )}
        <div className="flex-1 progress-bar">
          <div className="progress-fill" style={{ width: `${progress}%` }} />
        </div>
        <span className="text-xs text-muted-foreground">
          {currentIndex + 1}/{exercises.length}
        </span>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-6">
        <div className="max-w-lg mx-auto animate-slide-up">
          <h2 className="text-xl font-bold text-center mb-4">{exercise.prompt}</h2>

          {exercise.type === 'blank' && renderBlankCode()}

          {(exercise.type === 'code' || exercise.type === 'bugfix') && (
            <div className="space-y-3">
              <div className="code-block">
                <textarea
                  value={code}
                  onChange={event => setCode(event.target.value)}
                  className="w-full min-h-[160px] bg-transparent outline-none resize-y font-mono text-sm"
                  spellCheck={false}
                />
              </div>
              {exercise.type === 'bugfix' && (
                <p className="text-xs text-muted-foreground text-center">
                  Encontre e corrija o bug antes de verificar.
                </p>
              )}
            </div>
          )}

          {showResult === 'wrong' && errorMessage && (
            <div className="glass-card p-4 mt-6 text-center text-sm text-error">
              {errorMessage}
            </div>
          )}

          {showResult === 'correct' && (
            <div className="glass-card p-4 mt-6 text-center text-sm">
              <div className="flex items-center justify-center gap-2 text-success font-semibold mb-2">
                <Check className="w-4 h-4" />
                Resposta correta!
              </div>
              <div className="flex items-center justify-center gap-2 text-xp font-semibold mb-1">
                <Zap className="w-4 h-4" />
                +{getXpForExercise(exercise)} XP
              </div>
              {conceptLabel && (
                <p className="text-muted-foreground text-xs">
                  Você praticou {conceptLabel}.
                </p>
              )}
            </div>
          )}

          {hints.length > 0 && (
            <div className="mt-6 space-y-2">
              {hints.map(hint => (
                <div key={hint.level} className="glass-card p-3 text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">Dica {hint.level}:</span> {hint.text}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="p-4 glass-card rounded-none border-x-0 border-b-0">
        <div className="max-w-lg mx-auto space-y-3">
          {showResult === 'wrong' && hintLevel < exercise.hints.length && (
            <Button
              variant="secondary"
              onClick={() => setHintLevel(prev => Math.min(prev + 1, exercise.hints.length))}
              className="w-full h-12"
            >
              <Lightbulb className="w-4 h-4 mr-2" />
              Ver dica
            </Button>
          )}

          <Button
            onClick={showResult ? handleContinue : handleCheck}
            disabled={checking || (!showResult && !canCheck())}
            className={`w-full h-14 text-lg font-bold rounded-xl transition-all ${
              showResult === 'correct'
                ? 'gradient-success glow-success hover:opacity-90'
                : 'gradient-primary glow-primary hover:opacity-90'
            }`}
          >
            {showResult === 'correct'
              ? isLastExercise
                ? 'Concluir'
                : 'Próximo'
              : showResult === 'wrong'
                ? 'Tentar novamente'
                : 'Verificar'}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
}
