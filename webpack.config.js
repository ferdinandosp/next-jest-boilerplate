const path = require('path');
const glob = require('glob');

module.exports = (config = {}, param = {}) => {
  const { dev } = param;
  // Fixes npm packages that depend on `fs` module
  const configuration = config;

  configuration.node = {
    fs: 'empty'
  };

  configuration.resolve = {
    modules: ['node_modules', './src']
  };

  configuration.module = {
    rules: [
      ...configuration.module && configuration.module.rules ? configuration.module.rules : [],
      {
        test: /\.css$/,
        use: ['babel-loader?compact=false', 'raw-loader', {
          loader: 'postcss-loader',
          options: {
            sourceMap: true
          }
        }]
      },
      {
        test: /\.s(a|c)ss$/,
        use: ['babel-loader?compact=false', 'raw-loader', {
          loader: 'postcss-loader',
          options: {
            sourceMap: 'inline'
          }
        }, {
          loader: 'sass-loader',
          options: {
            sourceMap: true,
            includePaths: ['styles', 'node_modules']
              .map(d => path.join(__dirname, d))
              .map(g => glob.sync(g))
              .reduce((a, c) => a.concat(c), [])
          }
        }
        ]
      }
    ]
  };

  /* If in Dev Environment, add eslint */
  if (dev) {
    configuration.module.rules.push({
      test: /\.js$/,
      enforce: 'pre',
      exclude: [/node_modules/],
      loader: 'eslint-loader',
      options: {
        emitWarning: true
      }
    });
  }

  return configuration;
};
