'use strict';
const path = require('path');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  mode: 'production',
  context: path.resolve('.'),
  entry: {
    bundle: './app.js'
  },
  output: {
    path: path.resolve('./build'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['react']
        }
      }
    ]
  },
  plugins: [new BundleAnalyzerPlugin({ analyzerMode: 'static' })]
};
