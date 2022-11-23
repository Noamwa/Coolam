const { resolve } = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const tsRule = {
  test: /\.ts(x?)$/,
  exclude: /node_modules/,
  use: 'ts-loader',
};

const cssRule = {
  test: /\.css$/,
  use: [
    'style-loader',
    'css-loader'
  ]
};

const plugins = [
  new HTMLWebpackPlugin({
    template: 'src/application/content/content.html',
    filename: 'content.html',
    chunks: ['content'],
  }),
  new HTMLWebpackPlugin({
    template: 'src/application/popup/popup.html',
    filename: 'popup.html',
    chunks: ['popup'],
  }),
  new CopyWebpackPlugin({
    patterns: [
      { from: "public", to: "." }
    ],
  }),
  new CleanWebpackPlugin(),
];

module.exports = {
  mode: "development",
  devtool: 'cheap-module-source-map',
  entry: {
    popup: './src/application/popup/Popup.tsx',
    content: './src/application/content/index.tsx'
  },
  output: {
    filename: '[name].js',
    path: resolve(__dirname, 'dist')
  },
  module: {
    rules: [tsRule, cssRule]
  },
  plugins,
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.css', '.scss'],
    modules: ['src', 'node_modules']
  }
}