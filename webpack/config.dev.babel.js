// Libraries
import merge from 'webpack-merge'
import webpack from 'webpack'

// Internal imports
import common from './config.common.babel'

export default merge(common, {
  devtool: 'source-map',
  devServer: {
    port: 4000,
    hot: true,
    contentBase: './dist',
    historyApiFallback: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ]
})
