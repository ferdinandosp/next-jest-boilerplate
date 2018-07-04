const path = require('path');
const glob = require('glob');

module.exports = {
  webpack: (config) => {
    // Fixes npm packages that depend on `fs` module

    const configuration = config;

    configuration.node = {
      fs: 'empty'
    };

    configuration.module.rules = [
      ...config.module.rules,
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
    ];

    /* If in Dev Environment, add eslint */
    config.module.rules.push({
      test: /\.js$/,
      enforce: 'pre',
      exclude: [/node_modules/],
      loader: 'eslint-loader',
      options: {
        emitWarning: true
      }
    });

    return config;
  }
};
