const express = require('express');
const fs = require('fs');

const app = express();
const port = process.env.PORT || 3000;

app.use('/users', (req, res, next) => {
  console.log('I am here too');
  res.send('<h1>Extra stuff</h1>');
});

app.use('/', (req, res, next) => {
  res.send('<h1>Stuff</h1>');
  console.log('I am here');
});

app.listen(port);
