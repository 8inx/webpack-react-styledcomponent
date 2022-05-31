const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {

  entry:{
    app: './src/index.js'
  },


  output: {
    filename: 'js/[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      template: './public/index.html'
    })
  ],

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(ttf|eot|icon.svg|woff2?|)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: "assets/fonts/[name].[ext][query]"
          },
        }
      },
    ]
  },
  
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
}