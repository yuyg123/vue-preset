module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'max-len': [
      'warn',
      150,
    ],
    'no-param-reassign': 'off',
    'guard-for-in': 'off',
    'no-restricted-syntax': 'off',
    'no-underscore-dangle': 'off',
    'func-names': 'off',
    'no-multi-assign': 'off',
    'no-await-in-loop': 'off',
    'linebreak-style': 'off',
    'prefer-destructuring': 'off',
    'no-return-await': 'off',
    'global-require': 'off',
    'import/no-dynamic-require': 'off',
    'no-continue': 'off',
    'no-mixed-operators': 'off',
    'comma-dangle': 'off'
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
