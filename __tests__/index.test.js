const { CLIEngine } = require('eslint');
const fs = require('fs');
const config = require('../');

const jsTest = fs.readFileSync(
  require.resolve('../__fixtures__/javascript.js'),
  'utf8',
);

const tsTest = fs.readFileSync(
  require.resolve('../__fixtures__/typescript.ts'),
  'utf8',
);

test('load config in eslint to validate all rule syntax is correct', () => {
  const cli = new CLIEngine({
    useEslintrc: false,
    configFile: require.resolve('../'),
  });

  const formatter = cli.getFormatter();

  expect.assertions(2);
  [tsTest, jsTest].forEach((code) => {
    const { errorCount, results } = cli.executeOnText(code);

    console.log(formatter(results));
    expect(errorCount).toBe(0);
  });
});

test('test basic properties of config', () => {
  expect(typeof config.parserOptions).toBe('object');
  expect(typeof config.env).toBe('object');
  expect(typeof config.rules).toBe('object');
});
