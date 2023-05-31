function config(api) {
  const presets = ["@babel/preset-env", "@babel/preset-react"];
  const plugins = ["@babel/plugin-transform-runtime"];

  api.cache(true);

  return {
    presets,
    plugins,
  };
}

module.exports = config;
