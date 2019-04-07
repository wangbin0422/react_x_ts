const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: {
    index: './lib/index.tsx',
  },
  // mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist/lib'),library: 'WUI',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      }
    ]
  },
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     title: 'WUI',
  //     template: 'index.html'
  //   })
  // ]
}