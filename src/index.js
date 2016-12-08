const http = require('http');
const express = require('express');
const app = express();
const config = require('./config');
const router = require('./routes/router');

app.use('/', router);

// 404错误
app.use((req, res, next) => {
  res.status(404).end();
});

// 500错误
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send(err.message);
});

const server = http.createServer(app)
  .listen(3000, err => {
    if (err) {
      console.error(err);
    }
    let addr = server.address();
    console.log('Server started, listen port: ', addr.port);
  });
  