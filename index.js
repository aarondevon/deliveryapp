const express = require('express');
const path = require('path');
// const pool = require('./db');
const client = require('./db');

client.connect();

//const rootDir = require('./util/path');
const app = express();
const hbs = require('hbs');
const port = process.env.PORT || 3000;

const partialsPath = path.join(__dirname, './views/partials');
const publicDirectoryPath = path.join(__dirname, './public');

app.use(express.static(publicDirectoryPath));
app.use(express.json()); // req.body

// Setup handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(partialsPath);

// DB Routes
// Add an account
app.get('/account', async (req, res) => {
  try {
    const account = await pool.query('SELECT * FROM account');
    res.json(account.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// Routes
app.use('/users', (req, res, next) => {
  console.log('I am here too');
  res.send('<h1>Extra stuff</h1>');
});

app.get('/', (req, res, next) => {
  console.log('I am here');
  res.render('index', {
    title: 'Delivery App',
  });
});

app.listen(port);
