const webpack = require('webpack')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = {
   mode: 'development',
   devServer: {
      port: 5000,
      hot: true,
      open: true
   },
   devtool: 'cheap-module-source-map',
   plugins: [
      new webpack.DefinePlugin({
         'process.env.serve': JSON.stringify('DEVELOPMENT')
      }),
      new ReactRefreshWebpackPlugin()
   ]
}