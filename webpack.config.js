const path = require('path');
module.exports = {
  entry: {
    index: './lib/index.tsx',
  },
  output: {
    path: path.resolve(__dirname, 'dist/lib'),
    library: 'WUI',
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
      },
      {
        test: /icons.+\.svg$/,
        loader: 'svg-sprite-loader',
      },
      {
        test: /\.s([ac])ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
        // use: [
        //     devMode ? 'style-loader' : {
        //         loader: MiniCssExtractPlugin.loader,
        //         options: {
        //             // publicPath: '../'
        //         }
        //     },
        //     'css-loader',
        //     {
        //         loader: "sass-loader",
        //         options: {
        //             includePaths: [path.resolve(__dirname, 'stylesheets', 'include')]
        //         }
        //     }]
      },
      {
        test: /\.(png|jpeg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
};