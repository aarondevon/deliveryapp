const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');
const path = require('path');
const PORT = process.env.PORT || 5000;



//middleware
app.use(cors());
// Don't know if I need { extended: false } or not
app.use(express.json({ extended: false })); // => allows us to access the req.body

//remove when ready to deploy to heroku
app.use(express.static(path.join(__dirname, './client/build')));

// Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/create_account', require('./routes/api/createAccount'));
app.use('/api/runs', require('./routes/api/runs'));
app.use('/api/auth', require('./routes/api/auth'));

if (process.env.NODE_ENV === 'production') {
  //server static content
  //yarn run build
  app.use(express.static(path.join(__dirname, 'client/build')));
}

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is starting on port ${PORT}`);
});