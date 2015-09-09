/**
 * Created by jr1500 on 9/09/15.
 */
var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

var ROOT_PATH = path.resolve(__dirname);


module.exports = {
  entry: path.resolve(ROOT_PATH, 'app/main'),
  output: {
    path: path.resolve(ROOT_PATH, 'build'),
    filename: 'bundle.js'
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlwebpackPlugin({
      title: 'Kanban app'
    })
  ]
};
