const http = require('http');
const express = require('express');
const app = express();
const config = require('./config');
const router = require('./routes/router');

app.use('/', router);

const server = http.createServer(app)
  .listen(3000, err => {
    if (err) {
      console.error(err);
    }
    let addr = server.address();
    console.log('Server started, listen port: ', addr.port);
  });