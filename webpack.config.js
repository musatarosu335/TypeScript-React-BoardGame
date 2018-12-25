const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const publicDir = path.join(__dirname, '/public');

module.exports = (env, argv) => {
  const IS_DEVELOPMENT = argv.mode === 'development';

  return ({
    entry: ['./src/index.tsx'],
    output: {
      path: publicDir,
      publicPath: '/',
      filename: 'bundle.js',
    },
    module: {
      rules: [{
          test: /\.tsx?$/,
          use: [{
            loader: 'ts-loader',
          }],
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.ts', '.tsx'],
    },
    devServer: {
      historyApiFallback: true,
      contentBase: publicDir,
      disableHostCheck: true, // https://github.com/webpack/webpack-dev-server/issues/1604
    },
    // devtool: IS_DEVELOPMENT ? 'inline-source-map' : '',
    // console.log()の削除
    optimization: {
      minimizer: IS_DEVELOPMENT ? [] : [
        new UglifyJSPlugin({
          uglifyOptions: {
            compress: {
              drop_console: true,
            },
          },
        }),
      ],
    },
  });
};