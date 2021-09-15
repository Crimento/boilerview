const path = require('path');
const webpack = require('webpack');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js', //Import file
  output: {
    filename: '[name].[contenthash].js', // output file
    path: path.resolve(__dirname, '../dist'), // Storage address of output file
  },
  plugins: [
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'My new app',
      template: 'src/index.html',
      minify: {
        removeComments: true, // Remove comments from HTML
        collapseWhitespace: true, // Remove whitespace and newline
      },
    }),
    new webpack.DefinePlugin({
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif)$/,
        type: 'asset', //Automatically choose between exporting a data URI and sending a separate file
      },
      {
        test: /\.vue$/,
        use: ['vue-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.vue', '.ts', '.js', '.jsx', '.json'], //It means that the file suffix can not be written in the import file
    alias: {
      '@': path.join(__dirname, 'src'),
      //When the import file is in src, it can be written as @ / component /
    },
  },
  optimization: {
    moduleIds: 'deterministic',
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
};
