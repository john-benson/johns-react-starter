const HtmlWebpackPlugin = require('html-webpack-plugin');
const PATHS = require('./paths');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: PATHS.app
  },
  resolve: {
    extensions: ['', '.jsx', '.js'],
    modulesDirectories: [PATHS.npm]
  },
  output: {
    path: PATHS.build,
    filename: '[name].js'
  },
  module: {
    loaders: [
      { test: /\.json$/, loader: "json" },
      {
        test: /\.(jsx|js)?$/,
        loaders: ['babel?cacheDirectory'],
        include: PATHS.app
      }, {
        test: /\.(otf|eot|png|ttf|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file?name=fonts/[hash].[ext]"
     }, {
       test: /\.(jpe?g|png|gif|svg)$/i,
       loaders: [
         'file?hash=sha512&digest=hex&name=images/[hash].[ext]',
         'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
       ]
     }
    ]
  },
  sassLoader: {
    includePaths: [PATHS.npm]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'node_modules/html-webpack-template/index.ejs',
      title: 'Classroom Manager',
      appMountId: 'app',
      inject: false
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ]
}
