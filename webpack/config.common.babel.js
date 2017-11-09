import path from 'path'
import CleanWebpackPlugin from 'clean-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'

import rules from './rules'

// Necessary because the configs are in the 'webpack' subfolder
const basePath = path.resolve(__dirname, '..')

export default {
  entry: {
    app: path.resolve(basePath, 'src', 'entry.tsx')
  },
  output: {
    filename: '[name].js',
    publicPath: '/',
    path: path.resolve(basePath, 'dist')
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Jalla!',
      template: path.resolve(basePath, 'src', 'index.ejs'),
      minify: {
        collapseWhitespace: true,
        removeComments: true
      }
    })
  ],
  resolve: {
    modules: [
      path.resolve(basePath, 'node_modules'),
      path.resolve(basePath, 'src')
    ],
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
  },
  module: {
    rules: rules
  }
}
