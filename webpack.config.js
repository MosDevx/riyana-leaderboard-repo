import { resolve } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export const mode = 'development';
export const entry = {
  main: resolve(__dirname, './src/index.js'),
};
export const output = {
  filename: '[name].bundle.js',
  path: resolve(__dirname, 'dist'),
  clean: true,
};
export const devServer = {
  static: './dist',
  open: true,
};
export const plugins = [
  new HtmlWebpackPlugin({
    title: 'Leaderboard',
    template: './src/index.html',
  }),
];
export const module = {
  rules: [
    {
      test: /\.css$/i,
      use: ['style-loader', 'css-loader'],
    },
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: ['babel-loader'],
    },
  ],
};
export const optimization = {
  runtimeChunk: 'single',
};
