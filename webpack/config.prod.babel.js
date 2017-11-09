import merge from 'webpack-merge'
import webpack from 'webpack'
import UglifyJSPlugin from 'uglifyjs-webpack-plugin'
import FontminPlugin from 'fontmin-webpack'
import NukecssPlugin from 'nukecss-webpack'

import common from './config.common.babel'

export default merge(common, {
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new NukecssPlugin(),
    new FontminPlugin({
      autodetect: true,
      glyphs: ['\uf0c8']
    }),
    new UglifyJSPlugin()
  ]
})
