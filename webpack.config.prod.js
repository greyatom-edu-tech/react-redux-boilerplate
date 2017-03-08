var path = require('path');
var webpack = require('webpack');
// var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: [
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': "'production'"
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })/*,
    new CopyWebpackPlugin([
      {
        from: 'bower_components/html/build/assets',
        to: 'assets'
      }
    ])*/
  ],
  module: {
    noParse:[ /node_modules\/localforage\/dist\/localforage.js/],
    preLoaders:[
      {
        test: /\.js$/,
        loaders: ['eslint-loader'],
        include: path.join(__dirname, 'src')
      },
    ],
    loaders: [
      // js
      {
        test: /\.js$/,
        loaders: ['babel'],
        include: [path.join(__dirname, 'src'), path.join(__dirname, 'translations')]
      }
    ]
  }
};
