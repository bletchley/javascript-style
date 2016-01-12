module.exports = {
  'extends': [
    'eslint-config-bletchley/rules/best-practices',
    'eslint-config-bletchley/rules/errors',
    'eslint-config-bletchley/rules/legacy',
    'eslint-config-bletchley/rules/node',
    'eslint-config-bletchley/rules/style',
    'eslint-config-bletchley/rules/variables'
  ].map(require.resolve),
  'env': {
    'browser': true,
    'node': true,
    'amd': false,
    'mocha': false,
    'jasmine': false
  },
  'ecmaFeatures': {},
  'globals': {},
  'rules': {}
};
