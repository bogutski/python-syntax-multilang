module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: 12,
  },
  extends: ['prettier'],
  plugins: ['prettier'],
  rules: {
    indent: ['error', 2],
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'linebreak-style': ['error', process.platform === 'win32' ? 'windows' : 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'no-unused-vars': [
      'error',
      {
        argsIgnorePattern: 'next',
      },
    ],
    'consistent-return': 0,
    'no-invalid-this': 2,
    'no-console': 0,
    'no-underscore-dangle': [
      'error',
      {
        allow: ['_id', '_doc'],
      },
    ],
    'no-use-before-define': [
      'error',
      {
        functions: false,
        classes: true,
      },
    ],
  },
};
