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

const isHtmlStructureExercise = (exercise: ExerciseData) =>
  exercise.validations.some(validation => validation.type === 'html-structure');

const splitHtmlCssFromStarter = (starterCode: string) => {
  const styleMatch = starterCode.match(/<style[^>]*>([\s\S]*?)<\/style>/i);
  if (styleMatch) {
    const css = (styleMatch[1] || '').trim();
    const html = starterCode.replace(styleMatch[0], '').trim();
    return {
      html,
      css,
    };
  }

  const looksLikeHtml = /<\/?[a-z][\s\S]*>/i.test(starterCode);
  if (looksLikeHtml) {
    return {
      html: starterCode,
      css: '',
    };
  }

  return {
    html: '',
    css: starterCode,
  };
};

const composeHtmlCss = (html: string, css: string) => {
  const htmlTrimmed = html.trim();
  const cssTrimmed = css.trim();

  if (!cssTrimmed) return htmlTrimmed;
  if (!htmlTrimmed) return `<style>\n${cssTrimmed}\n</style>`;

  return `<style>\n${cssTrimmed}\n</style>\n${htmlTrimmed}`;
};

const buildPreviewDoc = (html: string, css: string) => {
  const htmlTrimmed = html.trim();
  const cssTrimmed = css.trim();

  return [
    '<!DOCTYPE html>',
    '<html lang="pt-BR">',
    '<head>',
    '<meta charset="UTF-8">',
    '<meta name="viewport" content="width=device-width, initial-scale=1">',
    '<style>',
    'body { font-family: Arial, sans-serif; padding: 12px; margin: 0; }',
    cssTrimmed,
    '</style>',
    '</head>',
    '<body>',
    htmlTrimmed,
    '</body>',
    '</html>',
  ].join('\n');
};

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
  const [htmlCode, setHtmlCode] = useState('');
  const [cssCode, setCssCode] = useState('');
  const [showResult, setShowResult] = useState<'correct' | 'wrong' | null>(null);
  const [hintLevel, setHintLevel] = useState(0);
  const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined);
  const [checking, setChecking] = useState(false);

  const exercise = exercises[currentIndex];
  const progress = exercises.length ? ((currentIndex + 1) / exercises.length) * 100 : 0;
  const isLastExercise = currentIndex === exercises.length - 1;
  const blankValidation = useMemo(() => getBlankValidation(exercise), [exercise]);
  const htmlPractice = useMemo(
    () =>
      Boolean(exercise)
      && (exercise.type === 'code' || exercise.type === 'bugfix')
      && isHtmlStructureExercise(exercise),
    [exercise]
  );

  const previewDoc = useMemo(() => buildPreviewDoc(htmlCode, cssCode), [htmlCode, cssCode]);

  useEffect(() => {
    const starter = exercise?.starter_code ?? '';
    const split = splitHtmlCssFromStarter(starter);

    setBlanks({});
    setCode(starter);
    setHtmlCode(split.html);
    setCssCode(split.css);
    setShowResult(null);
    setHintLevel(0);
    setErrorMessage(undefined);
    setChecking(false);
  }, [exercise?.id, exercise?.starter_code]);

  if (!exercise) {
    return null;
  }

  const canCheck = () => {
    if (exercise.type === 'blank' && blankValidation) {
      return blankValidation.blanks.every(blank => (blanks[blank.id] || '').trim().length > 0);
    }

    if (htmlPractice) {
      return (htmlCode + cssCode).trim().length > 0;
    }

    return (code || '').trim().length > 0;
  };

  const handleCheck = async () => {
    if (!canCheck()) return;

    setChecking(true);

    const sourceCode = htmlPractice ? composeHtmlCss(htmlCode, cssCode) : code;
    const result = await validateExercise(exercise, {
      code: sourceCode,
      blanks,
      html: htmlPractice ? htmlCode : undefined,
      css: htmlPractice ? cssCode : undefined,
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
              aria-label={`Resposta para ${blank.id}`}
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
          <button
            onClick={onExit}
            className="p-2 rounded-lg hover:bg-muted transition-colors"
            aria-label="Sair da licao"
          >
            <X className="w-6 h-6 text-muted-foreground" />
          </button>
        )}
        <div className="flex-1 progress-bar" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(progress)}>
          <div className="progress-fill" style={{ width: `${progress}%` }} />
        </div>
        <span className="text-xs text-muted-foreground" aria-live="polite">
          {currentIndex + 1}/{exercises.length}
        </span>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-6">
        <div className="max-w-3xl mx-auto animate-slide-up">
          <h2 className="text-xl font-bold text-center mb-4">{exercise.prompt}</h2>

          {exercise.type === 'blank' && renderBlankCode()}

          {(exercise.type === 'code' || exercise.type === 'bugfix') && htmlPractice && (
            <div className="space-y-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="code-block">
                  <label className="text-xs uppercase tracking-wide text-muted-foreground block mb-2" htmlFor="html-editor">
                    HTML
                  </label>
                  <textarea
                    id="html-editor"
                    value={htmlCode}
                    onChange={event => setHtmlCode(event.target.value)}
                    className="w-full min-h-[180px] bg-transparent outline-none resize-y font-mono text-sm"
                    spellCheck={false}
                    aria-label="Editor HTML"
                  />
                </div>

                <div className="code-block">
                  <label className="text-xs uppercase tracking-wide text-muted-foreground block mb-2" htmlFor="css-editor">
                    CSS
                  </label>
                  <textarea
                    id="css-editor"
                    value={cssCode}
                    onChange={event => setCssCode(event.target.value)}
                    className="w-full min-h-[180px] bg-transparent outline-none resize-y font-mono text-sm"
                    spellCheck={false}
                    aria-label="Editor CSS"
                  />
                </div>
              </div>

              <div className="glass-card p-3">
                <div className="text-xs uppercase tracking-wide text-muted-foreground mb-2">Preview</div>
                <iframe
                  title="Preview do exercicio"
                  srcDoc={previewDoc}
                  className="w-full h-56 bg-white rounded-lg border border-border/40"
                  sandbox="allow-same-origin"
                />
              </div>

              {exercise.type === 'bugfix' && (
                <p className="text-xs text-muted-foreground text-center">
                  Encontre e corrija o bug antes de verificar.
                </p>
              )}
            </div>
          )}

          {(exercise.type === 'code' || exercise.type === 'bugfix') && !htmlPractice && (
            <div className="space-y-3">
              <div className="code-block">
                <textarea
                  value={code}
                  onChange={event => setCode(event.target.value)}
                  className="w-full min-h-[160px] bg-transparent outline-none resize-y font-mono text-sm"
                  spellCheck={false}
                  aria-label="Editor de codigo"
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
            <div className="glass-card p-4 mt-6 text-center text-sm text-error" aria-live="polite">
              {errorMessage}
            </div>
          )}

          {showResult === 'correct' && (
            <div className="glass-card p-4 mt-6 text-center text-sm" aria-live="polite">
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
                  Voce praticou {conceptLabel}.
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
        <div className="max-w-3xl mx-auto space-y-3">
          {showResult === 'wrong' && hintLevel < exercise.hints.length && (
            <Button
              variant="secondary"
              onClick={() => setHintLevel(prev => Math.min(prev + 1, exercise.hints.length))}
              className="w-full h-12"
              aria-label="Ver proxima dica"
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
            aria-label={showResult === 'correct' ? 'Ir para proximo exercicio' : 'Verificar resposta'}
          >
            {showResult === 'correct'
              ? isLastExercise
                ? 'Concluir'
                : 'Proximo'
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
