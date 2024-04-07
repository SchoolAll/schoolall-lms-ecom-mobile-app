module.exports = function (api) {
  api.cache(true);
  const plugins = [];

  plugins.push('react-native-paper/babel')
  plugins.push('@babel/plugin-proposal-export-namespace-from')
  plugins.push('react-native-reanimated/plugin')

  return {
    presets: [['babel-preset-expo', { jsxImportSource: 'nativewind' }], 'nativewind/babel'],

    plugins,
  };
};
