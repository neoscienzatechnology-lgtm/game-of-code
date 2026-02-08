export interface JsTestCase {
  name: string;
  code: string;
}

export interface JsTestResult {
  passed: boolean;
  error?: string;
}

const buildWorkerScript = () => `
self.onmessage = (event) => {
  const { userCode, tests } = event.data;
  const assert = (condition, message) => {
    if (!condition) {
      throw new Error(message || 'Assertion failed');
    }
  };

  (async () => {
    const console = { log: () => {} };
    const module = { exports: {} };
    const exports = module.exports;
    const wrappedTests = tests
      .map((test) => '{\\n' + test.code + '\\n}')
      .join('\\n');
    const combinedCode = userCode + '\\n' + wrappedTests;
    const fn = new Function(
      'assert',
      'console',
      'module',
      'exports',
      'return (async () => {\\n' + combinedCode + '\\n})();'
    );
    await fn(assert, console, module, exports);

    self.postMessage({ passed: true });
  })().catch((err) => {
    self.postMessage({ passed: false, error: err && err.message ? err.message : String(err) });
  });
};
`;

export const runJsTestsInline = async (
  userCode: string,
  tests: JsTestCase[]
): Promise<JsTestResult> => {
  const assert = (condition: boolean, message?: string) => {
    if (!condition) throw new Error(message || 'Assertion failed');
  };

  try {
    const console = { log: () => {} };
    const module = { exports: {} };
    const exports = module.exports;
    const wrappedTests = tests
      .map(test => '{\n' + test.code + '\n}')
      .join('\n');
    const combinedCode = userCode + '\n' + wrappedTests;
    const fn = new Function(
      'assert',
      'console',
      'module',
      'exports',
      'return (async () => {\n' + combinedCode + '\n})();'
    );
    await fn(assert, console, module, exports);

    return { passed: true };
  } catch (err) {
    return { passed: false, error: err instanceof Error ? err.message : String(err) };
  }
};

export const runJsTests = async (
  userCode: string,
  tests: JsTestCase[],
  timeoutMs = 1500
): Promise<JsTestResult> => {
  if (typeof Worker === 'undefined') {
    return await runJsTestsInline(userCode, tests);
  }

  const workerScript = buildWorkerScript();
  const blob = new Blob([workerScript], { type: 'text/javascript' });
  const workerUrl = URL.createObjectURL(blob);
  const worker = new Worker(workerUrl);

  return await new Promise(resolve => {
    const timer = setTimeout(() => {
      worker.terminate();
      URL.revokeObjectURL(workerUrl);
      resolve({ passed: false, error: 'Tempo limite excedido' });
    }, timeoutMs);

    worker.onmessage = event => {
      clearTimeout(timer);
      worker.terminate();
      URL.revokeObjectURL(workerUrl);
      resolve(event.data as JsTestResult);
    };

    worker.onerror = event => {
      clearTimeout(timer);
      worker.terminate();
      URL.revokeObjectURL(workerUrl);
      resolve({ passed: false, error: event.message || 'Erro inesperado' });
    };

    worker.postMessage({ userCode, tests });
  });
};
