// var webpack = require("webpack")
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

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
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          extractCSS: true
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: [
            ['es2015', { modules: false }]
          ],
          cacheDirectory: true
        },
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('vue-imagefill.css')
  ]
}
