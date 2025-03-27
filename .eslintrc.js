module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:nuxt/recommended',
    'prettier',
  ],
  plugins: [],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  rules: {
    // Свої кастомні правила (можна додати)
    'vue/multi-word-component-names': 'off',
    'no-console': 'warn',
  },
}
