const fs = require('fs');
const uuid = require('uuid');
const LRU = require('lru-cache');
const gm = require('gm');

const cacheOpt = {
  max: 500,
  length: function (n, key) { return n * 2 + key.length },
  dispose: function (key, n) { n.close() },
  maxAge: 1000 * 60 * 60
};

const cache = LRU(cacheOpt);

const util = {
  cache,
  uuidV4() {
    return uuid.v4();
  },
  ensureDirExists(dir) {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
  },
  getImageSize(imgPath) {
    return new Promise((resolve, reject) => {
      gm(imgPath)
        .size(imgPath, (err, size) => {
          if (err) {
            return reject(err);
          }
          resolve(size);
        });
    });
  },
  resizeImage(imgPath, targetFilePath, width, height) {
    return new Promise((resolve, reject) => {
      gm(imgPath)
        .resizeExact(width, height)
        .noProfile()
        .write(targetFilePath, err => {
          if (err) {
            return reject(err);
          }
          resolve(targetFilePath);
        });
    });
  }
};

module.exports = util;
