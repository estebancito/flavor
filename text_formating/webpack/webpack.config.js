const path = require('path') // import node path module
var webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

// on console we install:
// we install: npm install mini-css-extract-plugin -D. for webpack 4.x
// we install: npm install css-loader style-loader -D for CSS supporting
// we install: npm install webpack-dev-server -D. for Webserver
// we install: npm install url-loader -D. for images supporting
// we install: npm install sass-loader -D. For SASS supporting

module.exports = {
  entry: path.resolve(__dirname, 'index.js'),
  output: {
    path: path.resolve(__dirname, '../dist/'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,//Extrae el css y lo pone en un archivo aparte
            options: {
              // you can specify a publicPath here
              // by default it use publicPath in webpackOptions.output
              publicPath: '../'
            }
          },
          "css-loader"
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it use publicPath in webpackOptions.output
              publicPath: '../../dist/css/'
            }
          },
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css"
    })
  ],
  watch: true
}
