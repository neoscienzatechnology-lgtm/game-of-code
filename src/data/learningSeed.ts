import type { LearningSeed } from '@/types/learning';

export const learningSeed: LearningSeed = {
  modules: [
    {
      id: 'module-js-basics',
      language: 'javascript',
      title: 'JavaScript Básico',
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
      concept: 'variáveis',
      title: 'Variáveis e constantes',
      content:
        'Variáveis guardam dados para reutilizar no código. Use const para valores fixos e let para valores que mudam. Exemplo: `const nome = \"Ana\";` e `let pontos = 0;`. Sempre prefira const quando o valor não muda e use nomes claros. Exemplo de uso: `let total = 0; total += 5;` mostra como atualizar um valor. Dica: evite nomes genéricos como x ou y.',
      order: 1,
      tags: ['js', 'variáveis', 'const', 'let'],
    },
    {
      id: 'lesson-js-conditionals',
      module_id: 'module-js-basics',
      language: 'javascript',
      concept: 'condicionais',
      title: 'Condicionais',
      content:
        'Condicionais executam blocos apenas quando a condição é verdadeira. Use if/else para decidir caminhos. Exemplo: `if (idade >= 18) { console.log(\"ok\"); } else { console.log(\"não\"); }`. Você pode combinar condições com `&&` e `||`. Exemplo de uso: `if (logado && admin) { ... }`. Dica: prefira comparações estritas (`===`).',
      order: 2,
      tags: ['js', 'if', 'else'],
    },
    {
      id: 'lesson-js-functions',
      module_id: 'module-js-basics',
      language: 'javascript',
      concept: 'funções',
      title: 'Funções',
      content:
        'Funções agrupam lógica reutilizável. Elas podem receber parâmetros e retornar valores. Exemplo: `function soma(a, b) { return a + b; }`. Para código curto, use arrow functions: `const dobro = n => n * 2;`. Exemplo de uso: `const total = soma(2, 3);`. Dica: mantenha funções pequenas e com um único objetivo.',
      order: 3,
      tags: ['js', 'funções'],
    },
  ],
  exercises: [
    {
      id: 'ex-js-vars-1',
      lesson_id: 'lesson-js-variables',
      type: 'blank',
      prompt: 'Complete a declaração de constante com o nome correto.',
      starter_code: 'const {{blank1}} = "Ana";',
      validations: [
        {
          type: 'blank',
          blanks: [{ id: 'blank1', answer: 'nome', placeholder: '____' }],
        },
      ],
      hints: [
        { level: 1, text: 'Use um nome simples de variável.' },
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
      prompt: 'Crie uma variável let chamada contador iniciando em 0.',
      starter_code: '// escreva seu código abaixo',
      validations: [
        {
          type: 'js-tests',
          tests: [
            {
              name: 'contador deve ser número',
              code: "assert(typeof contador === 'number', 'contador deve ser número');",
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
      prompt: 'Corrija o bug: a função não retorna a mensagem.',
      starter_code:
        'function criarMensagem(nome) {\n  const mensagem = "Olá, " + nome;\n}',
      validations: [
        {
          type: 'js-tests',
          tests: [
            {
              name: 'função retorna mensagem',
              code: "assert(criarMensagem('Ada') === 'Olá, Ada', 'A função deve retornar a mensagem');",
            },
          ],
        },
      ],
      hints: [
        { level: 1, text: 'A função precisa retornar um valor.' },
        { level: 2, text: 'Use a palavra-chave return.' },
        { level: 3, text: 'Return mensagem no final da função.' },
      ],
      solution:
        'function criarMensagem(nome) {\n  const mensagem = "Olá, " + nome;\n  return mensagem;\n}',
      difficulty: 'medium',
      estimated_time: 60,
    },
    {
      id: 'ex-js-if-1',
      lesson_id: 'lesson-js-conditionals',
      type: 'blank',
      prompt: 'Complete a condição para validar idade.',
      starter_code: 'if ({{blank1}} >= 18) {\n  console.log("ok");\n}',
      validations: [
        {
          type: 'blank',
          blanks: [{ id: 'blank1', answer: 'idade', placeholder: '_____' }],
        },
      ],
      hints: [
        { level: 1, text: 'Use a variável com a idade.' },
        { level: 2, text: 'A condição compara idade com 18.' },
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
      prompt: 'Implemente a função isPar que retorna true para números pares.',
      starter_code: 'function isPar(n) {\n  // seu código\n}',
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
      prompt: 'Corrija a comparação para permitir 18 anos.',
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
        { level: 1, text: 'A comparação deve aceitar 18.' },
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
      prompt: 'Complete o nome da função de soma.',
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
              name: 'dobro é função',
              code: "assert(typeof dobro === 'function', 'dobro deve ser função');",
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
        { level: 2, text: 'O nome da função é dobro.' },
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
      prompt: "Implemente a função saudação que retorna 'Olá, <nome>'.",
      starter_code: 'function saudacao(nome) {\n  // seu código\n}',
      validations: [
        {
          type: 'js-tests',
          tests: [
            {
              name: 'saudacao inclui nome',
              code: "assert(saudacao('Lia') === 'Olá, Lia', 'saudacao deve incluir nome');",
            },
          ],
        },
      ],
      hints: [
        { level: 1, text: 'Retorne uma string com o nome.' },
        { level: 2, text: 'Use concatenação ou template string.' },
        { level: 3, text: "return 'Olá, ' + nome;" },
      ],
      solution: 'function saudacao(nome) {\n  return "Olá, " + nome;\n}',
      difficulty: 'medium',
      estimated_time: 60,
    },
    {
      id: 'ex-js-fn-4',
      lesson_id: 'lesson-js-functions',
      type: 'bugfix',
      prompt: 'Corrija a função para usar ambos os parâmetros.',
      starter_code:
        'function areaRetangulo(largura, altura) {\n  return largura * largura;\n}',
      validations: [
        {
          type: 'js-tests',
          tests: [
            {
              name: 'área correta',
              code: 'assert(areaRetangulo(3, 4) === 12, "área deve ser largura * altura");',
            },
          ],
        },
      ],
      hints: [
        { level: 1, text: 'A altura não está sendo usada.' },
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
