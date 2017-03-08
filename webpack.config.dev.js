var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
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
      },
    ],
  }
};
