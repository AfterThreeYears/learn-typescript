const CleanWebpackPlugin =  require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const isProd = process.env.NODE_ENV === 'production';
const dist = path.resolve(__dirname, './dist');
const template = path.resolve(__dirname, '../index.html');

module.exports = {
  entry: path.resolve(__dirname, './src/basic-type'),
  output: {
    filename: 'main.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/,
    }],
  },
  devtool: isProd ? false : 'inline-source-map',
  devServer: {
    contentBase: dist,
    stats: 'errors-only',
    compress: false,
    port: 8089,
    open: true,
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [dist],
    }),
    new HtmlWebpackPlugin({
      template,
    })
  ],
};
