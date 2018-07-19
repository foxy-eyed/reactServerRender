require('babel-register');

const express = require('express');
const content = require('./render').default;

const app = express();

app.get('/', (req, res) => {
  res.send(content);
});

app.listen(3005);
