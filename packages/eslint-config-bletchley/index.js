module.exports = {
  'extends': [
    'eslint-config-bletchley/base',
    'eslint-config-bletchley/rules/strict',
    'eslint-config-bletchley/rules/react',
  ].map(require.resolve),
  rules: {}
};
