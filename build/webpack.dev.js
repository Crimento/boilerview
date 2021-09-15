const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  plugins: [
    new BrowserSyncPlugin({
      ui: false,
      host: 'localhost',
      port: 3000,
      open: false,
      server: { baseDir: ['dist'] },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(s*)css$/,
        use: ['vue-style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
});
