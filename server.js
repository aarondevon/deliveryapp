const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');
const path = require('path');
const PORT = process.env.PORT || 5000;



//middleware
app.use(cors());
app.use(express.json()); // => allows us to access the req.body

//remove when ready to deploy to heroku
// app.use(express.static(path.join(__dirname, './client/build')));


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