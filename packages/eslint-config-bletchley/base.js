module.exports = {
  'extends': [
    'eslint-config-bletchley/legacy',
    'eslint-config-bletchley/rules/es6',
  ].map(require.resolve),
  'rules': {}
};
