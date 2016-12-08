const path = require('path');

const config = {
  port: 1002,
  dbFolder: path.join(__dirname, 'database'),
  uploadFolder: path.join(__dirname, '../uploads')
};

module.exports = config;
