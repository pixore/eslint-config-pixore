const { assign } = Object;

module.exports = (react = false) =>
  assign(
    {
      extends: [
        'plugin:@typescript-eslint/recommended',
        'standard',
        react ? 'standard-react' : undefined,
        'prettier',
        'prettier/@typescript-eslint',
      ].filter(Boolean),
      parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
          generators: false,
          jsx: true,
          objectLiteralDuplicateProperties: false,
        },
      },
      rules: {
        'prefer-destructuring': [
          'error',
          {
            array: true,
            object: true,
          },
          {
            enforceForRenamedProperties: false,
          },
        ],
        'no-var': 'error',
        'prefer-const': [
          'error',
          {
            destructuring: 'any',
            ignoreReadBeforeAssign: true,
          },
        ],
        'no-unused-vars': [
          'error',
          { vars: 'all', args: 'none', ignoreRestSiblings: true },
        ],
      },
      overrides: [
        {
          files: ['*.js'],
          rules: {
            '@typescript-eslint/adjacent-overload-signatures': 'off',
            '@typescript-eslint/array-type': 'off',
            '@typescript-eslint/ban-types': 'off',
            '@typescript-eslint/camelcase': 'off',
            '@typescript-eslint/class-name-casing': 'off',
            '@typescript-eslint/explicit-function-return-type': 'off',
            '@typescript-eslint/explicit-member-accessibility': 'off',
            '@typescript-eslint/indent': 'off',
            '@typescript-eslint/interface-name-prefix': 'off',
            '@typescript-eslint/member-delimiter-style': 'off',
            '@typescript-eslint/no-angle-bracket-type-assertion': 'off',
            '@typescript-eslint/no-array-constructor': 'off',
            '@typescript-eslint/no-empty-interface': 'off',
            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/no-inferrable-types': 'off',
            '@typescript-eslint/no-misused-new': 'off',
            '@typescript-eslint/no-namespace': 'off',
            '@typescript-eslint/no-non-null-assertion': 'off',
            '@typescript-eslint/no-object-literal-type-assertion': 'off',
            '@typescript-eslint/no-parameter-properties': 'off',
            '@typescript-eslint/no-triple-slash-reference': 'off',
            '@typescript-eslint/no-unused-vars': 'off',
            '@typescript-eslint/no-use-before-define': 'off',
            '@typescript-eslint/no-var-requires': 'off',
            '@typescript-eslint/prefer-interface': 'off',
            '@typescript-eslint/prefer-namespace-keyword': 'off',
            '@typescript-eslint/type-annotation-spacing': 'off',
          },
        },
      ],
      env: {
        es6: true,
        jest: true,
      },
    },
    react
      ? {
          settings: {
            react: {
              version: 'detect',
            },
          },
        }
      : {},
  );
