'use strict';

const mkdirp = require('mkdirp');
const imagemagick = require('imagemagick');
const dirname = require('path').dirname;

module.exports = (configs, callback) => {
  for (let config of configs) {
    for (let destination of config.destinations) {
      let path = destination.path;
      if (config.path) {
        path = config.path + '/' + destination.path;
      }
      mkdirp.sync(dirname(path));
      imagemagick.resize(
          {
            srcPath: config.source,
            dstPath: path,
            width: destination.width || destination.height,
            height: destination.height || destination.width
          },
          callback || ((err) => { if (err) { console.log(err); } })
      );
    }
  }
};
