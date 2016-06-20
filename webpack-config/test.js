const PATHS = require('./paths');

module.exports = {
  entry: {  },
  resolve: {
    alias: {
      'app': PATHS.app
    }
  },
  externals: {
   'cheerio': 'window',
   'react/addons': true,
   'react/lib/ExecutionEnvironment': true,
   'react/lib/ReactContext': true
 },
  devtool: '#source-map',
  module: {
    preLoaders: [{
      test: /^((?!spec).)*\.(jsx|js)$/,
      loaders: [ 'isparta-instrumenter' ],
      include: PATHS.app
    }],
    loaders: [{
      test: /\.scss$/,
      loaders: [ 'style', 'css', 'sass' ]
    }],
  }
}
