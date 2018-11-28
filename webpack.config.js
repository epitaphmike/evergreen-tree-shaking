'use strict'
const path = require('path')
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer')

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
  plugins: [new BundleAnalyzerPlugin({analyzerMode: 'static'})]
}
