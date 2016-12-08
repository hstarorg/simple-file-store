const fs = require('fs');
const path = require('path');
const DataStore = require('nedb');
const config = require('./../config');
const util = require('./util');

// 确保数据库目录存在
util.ensureDirExists(config.dbFolder);

const db = {};

db.files = new DataStore({ filename: path.join(config.dbFolder, 'files.db'), autoload: true });

db.writeFileInfo = fileInfo => {
  return new Promise((resolve, reject) => {
    db.files.insert(fileInfo, (err, doc) => {
      if (err) {
        return reject(err);
      }
      resolve(doc);
    });
  });
};

db.findFile = aliasName => {
  return new Promise((resolve, reject) => {
    db.files.findOne({aliasName}, (err, file) => {
      if(err){
        return reject(err);
      }
      resolve(file);
    });
  });
};

module.exports = db;
