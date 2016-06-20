'use strict';

const merge = require('webpack-merge');

const TARGET = process.env.npm_lifecycle_event;

process.env.BABEL_ENV = TARGET;

let common = require('./webpack-config/common');

if(TARGET === 'start' || !TARGET) {
  module.exports = merge(common, require('./webpack-config/serve'));
}

if(TARGET === 'build' || TARGET === 'stats') {
  module.exports = merge(common, require('./webpack-config/build'))
}

if(TARGET === 'test' || TARGET === 'tdd') {
  module.exports = merge(common, require('./webpack-config/test'))
};
