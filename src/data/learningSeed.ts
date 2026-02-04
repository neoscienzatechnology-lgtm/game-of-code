import type { LearningSeed } from '@/types/learning';

export const learningSeed: LearningSeed = {
  modules: [
    {
      id: 'module-js-basics',
      language: 'javascript',
      title: 'JavaScript Basico',
      description: 'Fundamentos essenciais para iniciar na linguagem.',
      order: 1,
      tags: ['js', 'basics'],
    },
  ],
  lessons: [
    {
      id: 'lesson-js-variables',
      module_id: 'module-js-basics',
      language: 'javascript',
      concept: 'variaveis',
      title: 'Variaveis e constantes',
      content:
        'Variaveis guardam dados para reutilizar no codigo. Use const para valores fixos e let para valores que mudam. Exemplo: `const nome = \"Ana\";` e `let pontos = 0;`. Sempre prefira const quando o valor nao muda e use nomes claros. Exemplo de uso: `let total = 0; total += 5;` mostra como atualizar um valor. Dica: evite nomes genericos como x ou y.',
      order: 1,
      tags: ['js', 'variaveis', 'const', 'let'],
    },
    {
      id: 'lesson-js-conditionals',
      module_id: 'module-js-basics',
      language: 'javascript',
      concept: 'condicionais',
      title: 'Condicionais',
      content:
        'Condicionais executam blocos apenas quando a condicao e verdadeira. Use if/else para decidir caminhos. Exemplo: `if (idade >= 18) { console.log(\"ok\"); } else { console.log(\"nao\"); }`. Voce pode combinar condicoes com `&&` e `||`. Exemplo de uso: `if (logado && admin) { ... }`. Dica: prefira comparacoes estritas (`===`).',
      order: 2,
      tags: ['js', 'if', 'else'],
    },
    {
      id: 'lesson-js-functions',
      module_id: 'module-js-basics',
      language: 'javascript',
      concept: 'funcoes',
      title: 'Funcoes',
      content:
        'Funcoes agrupam logica reutilizavel. Elas podem receber parametros e retornar valores. Exemplo: `function soma(a, b) { return a + b; }`. Para codigo curto, use arrow functions: `const dobro = n => n * 2;`. Exemplo de uso: `const total = soma(2, 3);`. Dica: mantenha funcoes pequenas e com um unico objetivo.',
      order: 3,
      tags: ['js', 'funcoes'],
    },
  ],
  exercises: [
    {
      id: 'ex-js-vars-1',
      lesson_id: 'lesson-js-variables',
      type: 'blank',
      prompt: 'Complete a declaracao de constante com o nome correto.',
      starter_code: 'const {{blank1}} = "Ana";',
      validations: [
        {
          type: 'blank',
          blanks: [{ id: 'blank1', answer: 'nome', placeholder: '____' }],
        },
      ],
      hints: [
        { level: 1, text: 'Use um nome simples de variavel.' },
        { level: 2, text: 'O valor representa o nome da pessoa.' },
        { level: 3, text: 'Resposta: nome' },
      ],
      solution: 'const nome = "Ana";',
      difficulty: 'easy',
      estimated_time: 30,
    },
    {
      id: 'ex-js-vars-2',
      lesson_id: 'lesson-js-variables',
      type: 'code',
      prompt: 'Crie uma variavel let chamada contador iniciando em 0.',
      starter_code: '// escreva seu codigo abaixo',
      validations: [
        {
          type: 'js-tests',
          tests: [
            {
              name: 'contador deve ser numero',
              code: "assert(typeof contador === 'number', 'contador deve ser numero');",
            },
            {
              name: 'contador inicia em 0',
              code: "assert(contador === 0, 'contador deve iniciar em 0');",
            },
          ],
        },
      ],
      hints: [
        { level: 1, text: 'Use a palavra-chave let.' },
        { level: 2, text: 'O nome deve ser contador.' },
        { level: 3, text: 'Exemplo: let contador = 0;' },
      ],
      solution: 'let contador = 0;',
      difficulty: 'easy',
      estimated_time: 45,
    },
    {
      id: 'ex-js-vars-3',
      lesson_id: 'lesson-js-variables',
      type: 'bugfix',
      prompt: 'Corrija o bug: a funcao nao retorna a mensagem.',
      starter_code:
        'function criarMensagem(nome) {\n  const mensagem = "Ola, " + nome;\n}',
      validations: [
        {
          type: 'js-tests',
          tests: [
            {
              name: 'funcao retorna mensagem',
              code: "assert(criarMensagem('Ada') === 'Ola, Ada', 'A funcao deve retornar a mensagem');",
            },
          ],
        },
      ],
      hints: [
        { level: 1, text: 'A funcao precisa retornar um valor.' },
        { level: 2, text: 'Use a palavra-chave return.' },
        { level: 3, text: 'Return mensagem no final da funcao.' },
      ],
      solution:
        'function criarMensagem(nome) {\n  const mensagem = "Ola, " + nome;\n  return mensagem;\n}',
      difficulty: 'medium',
      estimated_time: 60,
    },
    {
      id: 'ex-js-if-1',
      lesson_id: 'lesson-js-conditionals',
      type: 'blank',
      prompt: 'Complete a condicao para validar idade.',
      starter_code: 'if ({{blank1}} >= 18) {\n  console.log("ok");\n}',
      validations: [
        {
          type: 'blank',
          blanks: [{ id: 'blank1', answer: 'idade', placeholder: '_____' }],
        },
      ],
      hints: [
        { level: 1, text: 'Use a variavel com a idade.' },
        { level: 2, text: 'A condicao compara idade com 18.' },
        { level: 3, text: 'Resposta: idade' },
      ],
      solution: 'if (idade >= 18) {\n  console.log("ok");\n}',
      difficulty: 'easy',
      estimated_time: 30,
    },
    {
      id: 'ex-js-if-2',
      lesson_id: 'lesson-js-conditionals',
      type: 'code',
      prompt: 'Implemente a funcao isPar que retorna true para numeros pares.',
      starter_code: 'function isPar(n) {\n  // seu codigo\n}',
      validations: [
        {
          type: 'js-tests',
          tests: [
            {
              name: '2 e par',
              code: "assert(isPar(2) === true, '2 deve ser par');",
            },
            {
              name: '3 e impar',
              code: "assert(isPar(3) === false, '3 deve ser impar');",
            },
          ],
        },
      ],
      hints: [
        { level: 1, text: 'Use o operador % para verificar paridade.' },
        { level: 2, text: 'Numero par tem resto 0 na divisao por 2.' },
        { level: 3, text: 'return n % 2 === 0;' },
      ],
      solution: 'function isPar(n) {\n  return n % 2 === 0;\n}',
      difficulty: 'medium',
      estimated_time: 60,
    },
    {
      id: 'ex-js-if-3',
      lesson_id: 'lesson-js-conditionals',
      type: 'bugfix',
      prompt: 'Corrija a comparacao para permitir 18 anos.',
      starter_code: 'function podeDirigir(idade) {\n  return idade > 18;\n}',
      validations: [
        {
          type: 'js-tests',
          tests: [
            {
              name: '18 deve ser permitido',
              code: "assert(podeDirigir(18) === true, '18 deve ser permitido');",
            },
          ],
        },
      ],
      hints: [
        { level: 1, text: 'A comparacao deve aceitar 18.' },
        { level: 2, text: 'Use >= em vez de >.' },
        { level: 3, text: 'return idade >= 18;' },
      ],
      solution: 'function podeDirigir(idade) {\n  return idade >= 18;\n}',
      difficulty: 'easy',
      estimated_time: 45,
    },
    {
      id: 'ex-js-fn-1',
      lesson_id: 'lesson-js-functions',
      type: 'blank',
      prompt: 'Complete o nome da funcao de soma.',
      starter_code: 'function {{blank1}}(a, b) {\n  return a + b;\n}',
      validations: [
        {
          type: 'blank',
          blanks: [{ id: 'blank1', answer: 'soma', placeholder: '____' }],
        },
      ],
      hints: [
        { level: 1, text: 'O nome deve indicar soma.' },
        { level: 2, text: 'Quatro letras.' },
        { level: 3, text: 'Resposta: soma' },
      ],
      solution: 'function soma(a, b) {\n  return a + b;\n}',
      difficulty: 'easy',
      estimated_time: 30,
    },
    {
      id: 'ex-js-fn-2',
      lesson_id: 'lesson-js-functions',
      type: 'code',
      prompt: 'Crie uma arrow function chamada dobro que multiplica por 2.',
      starter_code: '// escreva aqui',
      validations: [
        {
          type: 'js-tests',
          tests: [
            {
              name: 'dobro e funcao',
              code: "assert(typeof dobro === 'function', 'dobro deve ser funcao');",
            },
            {
              name: 'dobro de 4',
              code: "assert(dobro(4) === 8, 'dobro de 4 deve ser 8');",
            },
          ],
        },
      ],
      hints: [
        { level: 1, text: 'Use const e arrow function.' },
        { level: 2, text: 'O nome da funcao e dobro.' },
        { level: 3, text: 'const dobro = (n) => n * 2;' },
      ],
      solution: 'const dobro = (n) => n * 2;',
      difficulty: 'medium',
      estimated_time: 60,
    },
    {
      id: 'ex-js-fn-3',
      lesson_id: 'lesson-js-functions',
      type: 'code',
      prompt: "Implemente a funcao saudacao que retorna 'Ola, <nome>'.",
      starter_code: 'function saudacao(nome) {\n  // seu codigo\n}',
      validations: [
        {
          type: 'js-tests',
          tests: [
            {
              name: 'saudacao inclui nome',
              code: "assert(saudacao('Lia') === 'Ola, Lia', 'saudacao deve incluir nome');",
            },
          ],
        },
      ],
      hints: [
        { level: 1, text: 'Retorne uma string com o nome.' },
        { level: 2, text: 'Use concatenacao ou template string.' },
        { level: 3, text: "return 'Ola, ' + nome;" },
      ],
      solution: 'function saudacao(nome) {\n  return "Ola, " + nome;\n}',
      difficulty: 'medium',
      estimated_time: 60,
    },
    {
      id: 'ex-js-fn-4',
      lesson_id: 'lesson-js-functions',
      type: 'bugfix',
      prompt: 'Corrija a funcao para usar ambos os parametros.',
      starter_code:
        'function areaRetangulo(largura, altura) {\n  return largura * largura;\n}',
      validations: [
        {
          type: 'js-tests',
          tests: [
            {
              name: 'area correta',
              code: 'assert(areaRetangulo(3, 4) === 12, "area deve ser largura * altura");',
            },
          ],
        },
      ],
      hints: [
        { level: 1, text: 'A altura nao esta sendo usada.' },
        { level: 2, text: 'Multiplique largura por altura.' },
        { level: 3, text: 'return largura * altura;' },
      ],
      solution:
        'function areaRetangulo(largura, altura) {\n  return largura * altura;\n}',
      difficulty: 'easy',
      estimated_time: 45,
    },
  ],
};
