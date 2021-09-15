module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/vue3-recommended', 'eslint:recommended', 'prettier'],
  plugins: ['vue'],
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
  },
};
