module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: ['@nuxtjs/eslint-config-typescript'],
  // add your custom rules here
  rules: {
    'nuxt/no-cjs-in-config': 'off',
    'space-before-function-paren': 'off',
    'semi': ['warn', 'always'],
    'vue/singleline-html-element-content-newline': 'off'
  }
};