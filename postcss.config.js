const postCssEasyImport = require('postcss-easy-import');
const cssnano = require('cssnano');

module.exports = () => {
  const config = {
    plugins: [
      postCssEasyImport({ prefix: '_' })
    ]
  };

  config.plugins = [
    ...config.plugins,
    cssnano
  ];

  return config;
};
