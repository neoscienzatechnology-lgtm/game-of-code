import type { ExerciseValidation, ValidationResult } from '@/types/learning';

const escapeRegex = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

export const validateHtmlStructure = (
  html: string,
  css: string,
  validation: Extract<ExerciseValidation, { type: 'html-structure' }>
): ValidationResult => {
  if (typeof DOMParser === 'undefined') {
    return {
      passed: false,
      error: 'Parser indisponivel',
      friendlyMessage: 'O ambiente atual não suporta validar HTML.',
    };
  }

  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');

  if (validation.requiredTags) {
    for (const tag of validation.requiredTags) {
      if (!doc.querySelector(tag)) {
        return {
          passed: false,
          error: `Tag ${tag} não encontrada`,
          friendlyMessage: `Adicione a tag ${tag} ao HTML.`,
        };
      }
    }
  }

  if (validation.requiredSelectors) {
    for (const selector of validation.requiredSelectors) {
      if (!doc.querySelector(selector)) {
        return {
          passed: false,
          error: `Seletor ${selector} não encontrado`,
          friendlyMessage: `Faltou o seletor ${selector} no HTML.`,
        };
      }
    }
  }

  if (validation.requiredClasses) {
    for (const className of validation.requiredClasses) {
      if (!doc.querySelector(`.${className}`)) {
        return {
          passed: false,
          error: `Classe ${className} não encontrada`,
          friendlyMessage: `Adicione a classe ${className} em um elemento.`,
        };
      }
    }
  }

  if (validation.requiredAttributes) {
    for (const attr of validation.requiredAttributes) {
      const element = doc.querySelector(attr.selector);
      if (!element) {
        return {
          passed: false,
          error: `Seletor ${attr.selector} não encontrado`,
          friendlyMessage: `Adicione o elemento ${attr.selector} no HTML.`,
        };
      }
      const value = element.getAttribute(attr.name);
      if (value === null) {
        return {
          passed: false,
          error: `Atributo ${attr.name} faltando`,
          friendlyMessage: `Inclua o atributo ${attr.name} em ${attr.selector}.`,
        };
      }
      if (attr.value && value !== attr.value) {
        return {
          passed: false,
          error: `Atributo ${attr.name} com valor incorreto`,
          friendlyMessage: `O atributo ${attr.name} deve ser "${attr.value}".`,
        };
      }
    }
  }

  if (validation.requiredCss && css) {
    for (const rule of validation.requiredCss) {
      const selectorRegex = new RegExp(`${escapeRegex(rule.selector)}\\s*\\{[^}]*\\}`);
      const match = css.match(selectorRegex);
      if (!match) {
        return {
          passed: false,
          error: `Seletor CSS ${rule.selector} não encontrado`,
          friendlyMessage: `Adicione o seletor ${rule.selector} no CSS.`,
        };
      }
      const block = match[0];
      const propertyPattern = rule.value
        ? `${escapeRegex(rule.property)}\\s*:\\s*${escapeRegex(rule.value)}`
        : `${escapeRegex(rule.property)}\\s*:\\s*[^;]+`;
      const propertyRegex = new RegExp(propertyPattern);
      if (!propertyRegex.test(block)) {
        return {
          passed: false,
          error: `Propriedade ${rule.property} faltando`,
          friendlyMessage: `Defina ${rule.property} em ${rule.selector}.`,
        };
      }
    }
  }

  return { passed: true };
};
