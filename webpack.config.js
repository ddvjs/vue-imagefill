// var webpack = require("webpack")
var path = require('path')

module.exports = {
  target: 'node',
  devtool: 'sourcemap',
  entry: {
    'main': './src/index.js'
  },
  output: {
    // 设置打包后的js的输出位置
    path: path.join(__dirname, './dist'),
    // 和入口文件的名字相同
    filename: '[name].js',
    libraryTarget: 'commonjs2'
  },
  resolve: {
    extensions: ['.js']
  },
  mode: 'development',
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: [
          ['es2015', { modules: false }]
        ],
        cacheDirectory: true
      },
    }]
  }
}
