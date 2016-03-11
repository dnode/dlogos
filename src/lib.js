'use strict';

const mkdirp = require('mkdirp');
const imagemagick = require('imagemagick');
const path = require('path');

module.exports = (configs, callback) => {
  for (let config of configs) {
    for (let destination of config.destinations) {
      mkdirp.sync(path.dirname(destination.path));
      imagemagick.resize(
          {
            srcPath: config.source,
            dstPath: destination.path,
            width: destination.width || destination.height,
            height: destination.height || destination.width
          },
          callback || ((err) => { if (err) { console.log(err); } })
      );
    }
  }
};
