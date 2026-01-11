module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: false
  },
  extends: ['eslint:recommended', 'plugin:import/recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    'no-unused-vars': 'warn',
    'no-console': 'off',
    'import/no-unresolved': 'off'
  }
};
