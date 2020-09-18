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

//ROUTES//

//create user
app.post("/create", async(req, res) => {
  try {
    const { userName, email, password } = req.body;
    console.log('trying');
    const newUser = await pool.query(
        "INSERT INTO account (account_user_name, account_user_email, account_user_password)" +
        "VALUES($1, $2, $3)",
        [userName, email, password]
    );

    res.json(newUser);
  } catch (err) {
    console.error(err.message);
  }
})

// if (process.env.NODE_ENV === 'production') {
//   //server static content
//   //yarn run build
//   app.use(express.static(path.join(__dirname, 'client/build')));
// }
//
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "client/build/index.html"));
// });

app.listen(PORT, () => {
  console.log(`Server is starting on port ${PORT}`);
});