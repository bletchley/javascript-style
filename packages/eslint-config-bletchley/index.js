module.exports = {
  'extends': [
    'eslint-config-bletchley/base',
    'eslint-config-bletchley/rules/strict',
    'eslint-config-bletchley/rules/react',
    'eslint-config-bletchley/rules/hut4'
  ].map(require.resolve),
  rules: {}
};
