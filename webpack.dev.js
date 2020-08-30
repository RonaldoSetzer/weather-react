const path = require('path');
const { merge } = require('webpack-merge');

const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    host: '0.0.0.0',
    port: 3000,
    historyApiFallback: true,
    contentBase: [
      path.resolve(__dirname, 'build'),
      path.resolve(__dirname, 'static'),
    ],
  },
});

