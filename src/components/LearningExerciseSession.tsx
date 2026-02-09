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
  getLessonContext?: (exerciseId: string) => { title: string; content: string } | undefined;
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

const normalizeChoiceValue = (value: string) =>
  value
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');

const hashSeed = (value: string) => {
  let hash = 0;
  for (let i = 0; i < value.length; i += 1) {
    hash = (hash * 31 + value.charCodeAt(i)) >>> 0;
  }
  return hash || 1;
};

const deterministicShuffle = <T,>(items: T[], seed: string) => {
  const shuffled = [...items];
  let state = hashSeed(seed);

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    state = (state * 1664525 + 1013904223) >>> 0;
    const swapIndex = state % (index + 1);
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }

  return shuffled;
};

const isLikelyCodeFragment = (value: string) => {
  const trimmed = value.trim();
  if (!trimmed) return false;

  if (/<\/?[a-z!][\s\S]*>/i.test(trimmed)) return true;
  if (/[@{}();=]/.test(trimmed)) return true;
  if (/\b(function|const|let|var|return|if|for|while|class|import|export)\b/i.test(trimmed)) return true;
  if (trimmed.includes('\n') && /[<>:{};]/.test(trimmed)) return true;
  if (/=>/.test(trimmed)) return true;

  return false;
};

const GENERIC_DISTRACTORS = [
  'HTML',
  'CSS',
  'JavaScript',
  'GET',
  'POST',
  'href',
  'src',
  'class',
  'id',
  'alt',
  'name',
  'type',
  'required',
  'placeholder',
  'method',
  'action',
];

const getTheorySnippet = (content: string) => {
  if (!content.trim()) return '';
  const sections = content.split(/(?=\b(?:Objetivo|Fato-chave|Exemplo de uso|Dica prática|Uso comum)\s*:)/i);
  const first = sections[0]?.trim() || content.trim();
  return first.slice(0, 220);
};

const buildPedagogicalFeedback = (params: {
  exercise: ExerciseData;
  lessonContext?: { title: string; content: string };
  blankValidation?: Extract<ExerciseValidation, { type: 'blank' }>;
  hint?: string;
  attemptsOnCurrent: number;
}) => {
  const { exercise, lessonContext, blankValidation, hint, attemptsOnCurrent } = params;
  const concept = lessonContext?.title || 'este conceito';
  const snippet = lessonContext ? getTheorySnippet(lessonContext.content) : '';
  const firstBlankAnswer = blankValidation?.blanks[0]?.answer?.trim();

  if (attemptsOnCurrent >= 1 && firstBlankAnswer && blankValidation?.blanks.length === 1) {
    return `Revisão orientada (${concept}): ${snippet || 'Volte ao resumo da lição e compare sua resposta com o conceito-chave.'} Atenção ao termo central: ${firstBlankAnswer}.`;
  }

  if (hint) {
    return `Revisão orientada (${concept}): ${snippet || 'Leia novamente a teoria da lição.'} Dica pedagógica: ${hint}`;
  }

  return `Revisão orientada (${concept}): ${snippet || 'Leia novamente a teoria e destaque os termos principais antes de tentar de novo.'}`;
};

export function LearningExerciseSession({
  exercises,
  onComplete,
  onExit,
  onAttempt,
  getConceptForExercise,
  getLessonContext,
}: LearningExerciseSessionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [blanks, setBlanks] = useState<Record<string, string>>({});
  const [code, setCode] = useState('');
  const [htmlCode, setHtmlCode] = useState('');
  const [cssCode, setCssCode] = useState('');
  const [showResult, setShowResult] = useState<'correct' | 'wrong' | null>(null);
  const [hintLevel, setHintLevel] = useState(0);
  const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined);
  const [pedagogicalFeedback, setPedagogicalFeedback] = useState<string | undefined>(undefined);
  const [attemptsOnCurrent, setAttemptsOnCurrent] = useState(0);
  const [checking, setChecking] = useState(false);

  const exercise = exercises[currentIndex];
  const progress = exercises.length ? ((currentIndex + 1) / exercises.length) * 100 : 0;
  const isLastExercise = currentIndex === exercises.length - 1;
  const blankValidation = useMemo(() => getBlankValidation(exercise), [exercise]);
  const lessonBlankAnswers = useMemo(() => {
    const byNormalized = new Map<string, string>();

    for (const lessonExercise of exercises) {
      for (const validation of lessonExercise.validations) {
        if (validation.type !== 'blank') continue;

        for (const blank of validation.blanks) {
          const answer = blank.answer.trim();
          if (!answer) continue;
          const normalized = normalizeChoiceValue(answer);
          if (!byNormalized.has(normalized)) {
            byNormalized.set(normalized, answer);
          }
        }
      }
    }

    return Array.from(byNormalized.values());
  }, [exercises]);
  const blankNeedsCodeTyping = useMemo(() => {
    if (exercise.type !== 'blank' || !blankValidation) return false;

    const starterWithoutPlaceholders = exercise.starter_code.replace(/\{\{blank\d+\}\}/g, ' ').trim();
    if (isLikelyCodeFragment(starterWithoutPlaceholders)) return true;

    return blankValidation.blanks.some(blank => isLikelyCodeFragment(blank.answer));
  }, [blankValidation, exercise.starter_code, exercise.type]);
  const isMultipleChoiceOnly = exercise.type === 'blank' && Boolean(blankValidation) && !blankNeedsCodeTyping;
  const templateHasVisibleText = useMemo(() => {
    if (exercise.type !== 'blank') return false;
    const withoutPlaceholders = exercise.starter_code.replace(/\{\{blank\d+\}\}/g, ' ').trim();
    return withoutPlaceholders.length > 0;
  }, [exercise.starter_code, exercise.type]);
  const blankChoices = useMemo(() => {
    if (!blankValidation) return {} as Record<string, string[]>;

    const choicesByBlank: Record<string, string[]> = {};

    for (const blank of blankValidation.blanks) {
      const answer = blank.answer.trim();
      const answerNormalized = normalizeChoiceValue(answer);
      const unique = new Map<string, string>();
      unique.set(answerNormalized, answer);

      const lessonCandidates = lessonBlankAnswers.filter(candidate => {
        const normalized = normalizeChoiceValue(candidate);
        return normalized !== answerNormalized && candidate.trim().length > 0;
      });

      const fallbackCandidates = GENERIC_DISTRACTORS.filter(candidate => {
        const normalized = normalizeChoiceValue(candidate);
        return normalized !== answerNormalized;
      });

      for (const candidate of [...lessonCandidates, ...fallbackCandidates]) {
        const normalized = normalizeChoiceValue(candidate);
        if (unique.has(normalized)) continue;
        unique.set(normalized, candidate);
        if (unique.size >= 4) break;
      }

      const options = deterministicShuffle(
        Array.from(unique.values()).slice(0, 4),
        `${exercise.id}-${blank.id}-${answerNormalized}`
      );

      choicesByBlank[blank.id] = options;
    }

    return choicesByBlank;
  }, [blankValidation, exercise.id, lessonBlankAnswers]);
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
    setPedagogicalFeedback(undefined);
    setAttemptsOnCurrent(0);
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
      setPedagogicalFeedback(undefined);
      onAttempt?.(exercise, true);
    } else {
      const lessonContext = getLessonContext?.(exercise.id);
      const feedback = buildPedagogicalFeedback({
        exercise,
        lessonContext,
        blankValidation,
        hint: exercise.hints[0]?.text,
        attemptsOnCurrent,
      });
      setShowResult('wrong');
      setErrorMessage(result.friendlyMessage ?? result.error);
      setPedagogicalFeedback(feedback);
      setAttemptsOnCurrent(prev => prev + 1);
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

  const renderBlankCode = (allowTyping: boolean) => {
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

          if (!allowTyping) {
            return (
              <span
                key={index}
                className="mx-1 inline-flex min-w-[96px] items-center justify-center rounded-md border border-primary/35 bg-primary/10 px-2 py-1 font-semibold text-primary"
              >
                {value || '____'}
              </span>
            );
          }

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

  const renderBlankChoices = () => {
    if (!blankValidation) return null;

    return (
      <div className="mt-4 space-y-3">
        {blankValidation.blanks.map((blank, index) => {
          const selected = blanks[blank.id] || '';
          const options = blankChoices[blank.id] ?? [blank.answer];
          const showCodeStyle = isLikelyCodeFragment(blank.answer);

          return (
            <div key={blank.id} className="glass-card p-3">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.08em] text-muted-foreground">
                {blankValidation.blanks.length === 1
                  ? 'Selecione a resposta'
                  : `Selecione a resposta ${index + 1}`}
              </p>
              <div className="flex flex-wrap gap-2">
                {options.map(option => {
                  const isSelected = normalizeChoiceValue(option) === normalizeChoiceValue(selected);
                  return (
                    <Button
                      key={`${blank.id}-${option}`}
                      type="button"
                      variant={isSelected ? 'default' : 'secondary'}
                      disabled={showResult === 'correct'}
                      onClick={() => setBlanks(prev => ({ ...prev, [blank.id]: option }))}
                      className={`h-auto min-h-10 whitespace-normal px-3 py-2 text-left ${
                        showCodeStyle ? 'font-mono text-xs' : 'text-sm'
                      }`}
                    >
                      {option}
                    </Button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  const conceptLabel = getConceptForExercise?.(exercise.id);
  const hints = exercise.hints.slice(0, hintLevel);

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-background/95 backdrop-blur-sm">
      <div className="border-b border-border/60 bg-background/70 px-4 py-3 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-4xl items-center gap-3">
          {onExit && (
            <button
              onClick={onExit}
              className="rounded-xl border border-border/60 bg-muted/35 p-2 transition-all hover:border-primary/40 hover:bg-muted/70"
              aria-label="Sair da lição"
            >
              <X className="h-5 w-5 text-muted-foreground" />
            </button>
          )}
          <div
            className="progress-bar flex-1"
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(progress)}
          >
            <div className="progress-fill" style={{ width: `${progress}%` }} />
          </div>
          <span className="rounded-full border border-border/60 bg-muted/30 px-2.5 py-1 text-xs text-muted-foreground">
            {currentIndex + 1}/{exercises.length}
          </span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-6">
        <div className="mx-auto w-full max-w-4xl animate-slide-up">
          <div className="glass-card mb-4 p-5 md:p-6">
            <h2 className="text-center text-xl font-bold leading-tight md:text-2xl">{exercise.prompt}</h2>
          </div>

          {exercise.type === 'blank' && (
            <div>
              {(blankNeedsCodeTyping || templateHasVisibleText) && renderBlankCode(blankNeedsCodeTyping)}
              {renderBlankChoices()}
              {isMultipleChoiceOnly && (
                <p className="mt-3 text-center text-xs text-muted-foreground">
                  Questão teórica: responda por múltipla escolha.
                </p>
              )}
              {blankNeedsCodeTyping && (
                <p className="mt-3 text-center text-xs text-muted-foreground">
                  Você pode digitar no código ou selecionar a resposta abaixo.
                </p>
              )}
            </div>
          )}

          {(exercise.type === 'code' || exercise.type === 'bugfix') && htmlPractice && (
            <div className="space-y-3">
              <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                <div className="code-block">
                  <label
                    className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground"
                    htmlFor="html-editor"
                  >
                    HTML
                  </label>
                  <textarea
                    id="html-editor"
                    value={htmlCode}
                    onChange={event => setHtmlCode(event.target.value)}
                    className="min-h-[190px] w-full resize-y bg-transparent text-sm outline-none"
                    spellCheck={false}
                    aria-label="Editor HTML"
                  />
                </div>

                <div className="code-block">
                  <label
                    className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground"
                    htmlFor="css-editor"
                  >
                    CSS
                  </label>
                  <textarea
                    id="css-editor"
                    value={cssCode}
                    onChange={event => setCssCode(event.target.value)}
                    className="min-h-[190px] w-full resize-y bg-transparent text-sm outline-none"
                    spellCheck={false}
                    aria-label="Editor CSS"
                  />
                </div>
              </div>

              <div className="glass-card p-3">
                <div className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                  Preview
                </div>
                <iframe
                  title="Preview do exercício"
                  srcDoc={previewDoc}
                  className="h-56 w-full rounded-lg border border-border/40 bg-white"
                  sandbox="allow-same-origin"
                />
              </div>

              {exercise.type === 'bugfix' && (
                <p className="text-center text-xs text-muted-foreground">
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
                  className="min-h-[170px] w-full resize-y bg-transparent text-sm outline-none"
                  spellCheck={false}
                  aria-label="Editor de código"
                />
              </div>
              {exercise.type === 'bugfix' && (
                <p className="text-center text-xs text-muted-foreground">
                  Encontre e corrija o bug antes de verificar.
                </p>
              )}
            </div>
          )}

          {showResult === 'wrong' && errorMessage && (
            <div className="glass-card mt-6 space-y-2 p-4 text-sm" aria-live="polite">
              <p className="text-center font-semibold text-error">{errorMessage}</p>
              {pedagogicalFeedback && (
                <p className="text-center text-muted-foreground">{pedagogicalFeedback}</p>
              )}
            </div>
          )}

          {showResult === 'correct' && (
            <div className="glass-card mt-6 p-4 text-center text-sm" aria-live="polite">
              <div className="mb-2 flex items-center justify-center gap-2 font-semibold text-success">
                <Check className="h-4 w-4" />
                Resposta correta!
              </div>
              <div className="mb-1 flex items-center justify-center gap-2 font-semibold text-xp">
                <Zap className="h-4 w-4" />
                +{getXpForExercise(exercise)} XP
              </div>
              {conceptLabel && (
                <p className="text-xs text-muted-foreground">
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

      <div className="border-t border-border/60 bg-background/70 p-4 backdrop-blur-xl">
        <div className="mx-auto w-full max-w-4xl space-y-3">
          {showResult === 'wrong' && hintLevel < exercise.hints.length && (
            <Button
              variant="secondary"
              onClick={() => setHintLevel(prev => Math.min(prev + 1, exercise.hints.length))}
              className="h-12 w-full"
              aria-label="Ver próxima dica"
            >
              <Lightbulb className="mr-2 h-4 w-4" />
              Ver dica
            </Button>
          )}

          <Button
            onClick={showResult ? handleContinue : handleCheck}
            disabled={checking || (!showResult && !canCheck())}
            className={`h-14 w-full rounded-xl text-lg font-bold transition-all ${
              showResult === 'correct'
                ? 'gradient-success glow-success hover:opacity-90'
                : 'gradient-primary glow-primary hover:opacity-90'
            }`}
            aria-label={showResult === 'correct' ? 'Ir para próximo exercício' : 'Verificar resposta'}
          >
            {showResult === 'correct'
              ? isLastExercise
                ? 'Concluir'
                : 'Próximo'
              : showResult === 'wrong'
                ? 'Tentar novamente'
                : 'Verificar'}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
