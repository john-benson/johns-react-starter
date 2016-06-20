const path = require('path');

// get the the root directory name
const dir = path.dirname(__dirname);

module.exports = {
  app: path.join(dir, 'app'),
  build: path.join(dir, 'build'),
  npm: path.join(dir, 'node_modules')
};
