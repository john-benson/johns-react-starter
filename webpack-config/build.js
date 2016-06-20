'use strict';

const webpack = require('webpack');
const pkg = require('../package.json');
const path = require('path');
const PATHS = require('./paths');

const CleanPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const includes = require('lodash/includes');

const vendorExceptionList = [
  // add any node_modules you want excluded from the vendor pacakage
];

module.exports = {
  entry: {
    vendor: Object.keys(pkg.dependencies).filter(function (v) {
      return !includes(vendorExceptionList, v);
    })
  },
  module: {
    loaders: [
      {
        test: /\.(scss|css|sass)?$/,
        loader: ExtractTextPlugin.extract('style', ['css', 'sass'])
      }
    ]
  },
  plugins: [
    new CleanPlugin([PATHS.build], { root: process.cwd() }),
    new ExtractTextPlugin('[name].css'),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    })
  ]
}
