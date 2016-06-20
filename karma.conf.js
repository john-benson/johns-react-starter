const path = require('path');
const webpack = require('./webpack.config');

webpack.entry = {};

module.exports = function karmaConfig(config) {
  config.set({
    frameworks: [ 'mocha', 'chai' ],
    reporters: [ 'spec', 'coverage' ],
    files: [
      'app/**/*spec.+(jsx|js)'
    ],
    preprocessors: {
      'app/**/*spec.+(jsx|js)': [ 'webpack', 'sourcemap' ]
    },
    browsers: [ 'PhantomJS' ],
    singleRun: true,
    coverageReporter: {
      dir: 'coverage/',
      type: 'html'
    },
    webpack: webpack,
    webpackMiddleware: {
      noInfo: true
    }
  });
};
