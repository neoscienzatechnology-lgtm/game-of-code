import type { ExerciseData, ExerciseValidation, ValidationResult } from '@/types/learning';
import { runJsTests } from './jsRunner';
import { validateHtmlStructure } from './htmlValidator';

const normalize = (value: string) => value.trim().toLowerCase();

const buildOutputTests = (
  validation: Extract<ExerciseValidation, { type: 'js-output' }>
) => {
  return validation.cases.map((testCase, index) => {
    const args = testCase.input.map(arg => JSON.stringify(arg)).join(', ');
    const expected = JSON.stringify(testCase.expected);
    return {
      name: `case-${index + 1}`,
      code: `const result = ${validation.functionName}(${args}); assert(JSON.stringify(result) === ${expected}, 'Resultado incorreto no caso ${index + 1}');`,
    };
  });
};

const toFriendlyMessage = (error?: string) => {
  if (!error) return undefined;
  if (error.includes('SyntaxError')) return 'Parece haver um erro de sintaxe.';
  if (error.includes('ReferenceError')) return 'Variavel ou funcao nao encontrada.';
  if (error.toLowerCase().includes('tempo limite')) return 'Seu codigo demorou demais para responder.';
  return error;
};

const extractCssFromCode = (code: string) => {
  const trimmed = code.trim();
  if (!trimmed) return '';

  // Allow CSS-only answers for style-focused exercises.
  if (!/<[a-z!/]/i.test(trimmed)) return trimmed;
  if (typeof DOMParser === 'undefined') return '';

  const parser = new DOMParser();
  const doc = parser.parseFromString(trimmed, 'text/html');
  return Array.from(doc.querySelectorAll('style'))
    .map(styleTag => styleTag.textContent ?? '')
    .join('\n')
    .trim();
};

export const validateExercise = async (
  exercise: ExerciseData,
  input: {
    code?: string;
    blanks?: Record<string, string>;
    html?: string;
    css?: string;
  }
): Promise<ValidationResult> => {
  for (const validation of exercise.validations) {
    if (validation.type === 'blank') {
      const blanks = validation.blanks;
      const values = input.blanks ?? {};
      const allCorrect = blanks.every(blank => normalize(values[blank.id] || '') === normalize(blank.answer));
      if (!allCorrect) {
        return {
          passed: false,
          error: 'Resposta incorreta',
          friendlyMessage: 'Confira os valores preenchidos e tente novamente.',
        };
      }
    }

    if (validation.type === 'js-tests') {
      const result = await runJsTests(input.code ?? '', validation.tests);
      if (!result.passed) {
        return {
          passed: false,
          error: result.error,
          friendlyMessage: toFriendlyMessage(result.error),
        };
      }
    }

    if (validation.type === 'js-output') {
      const tests = buildOutputTests(validation);
      const result = await runJsTests(input.code ?? '', tests);
      if (!result.passed) {
        return {
          passed: false,
          error: result.error,
          friendlyMessage: toFriendlyMessage(result.error),
        };
      }
    }

    if (validation.type === 'html-structure') {
      const sourceCode = input.code ?? '';
      const htmlInput = input.html ?? sourceCode;
      const cssInput = input.css ?? extractCssFromCode(sourceCode || htmlInput);
      const htmlResult = validateHtmlStructure(
        htmlInput,
        cssInput,
        validation
      );
      if (!htmlResult.passed) return htmlResult;
    }
  }

  return { passed: true };
};
