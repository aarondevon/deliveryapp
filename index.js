const express = require('express');
const path = require('path');
const rootDir = require('./util/path');
const app = express();
const hbs = require('hbs');
const port = process.env.PORT || 3000;

const partialsPath = path.join(__dirname, './views/partials');

// Setup handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(partialsPath);

app.use('/users', (req, res, next) => {
  console.log('I am here too');
  res.send('<h1>Extra stuff</h1>');
});

app.get('/', (req, res, next) => {
  console.log('I am here');
  res.render('index', {
    title: 'Delivery App'
  });
});

app.listen(port);
