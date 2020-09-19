const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const pool = require('../../db');

// @route     GET api/create_account
// @desc      Register User
// @access    Public
router.post('/', [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 })
], async (req, res) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email, password } = req.body;

  try {
    // See if user exists
    // let user = await
    let user = await pool.query("SELECT account_user_email FROM account WHERE account_user_email = $1", [email]);
    console.log('I am the user', user);
    if (user.rowCount > 0) {
     return res.status(400).json({errors: [ {msg: 'User already exists'} ]});
    }
    // Get users gravatar
    // const avatar = gravatar.url(email, {
    //   s: '200',
    //   r: 'pg',
    //   d: 'mm'
    // })

    // Encrypt password
    const userObj = {
      name: name,
      email: email,
      password: password
    }

    const salt = await bcrypt.genSalt(10);
    userObj.password = await bcrypt.hash(password, salt);

    // This works
      const newUser = await pool.query(
          "INSERT INTO account (account_user_name, account_user_email, account_user_password)" +
          "VALUES($1, $2, $3) RETURNING *",
          [userObj.name, userObj.email, userObj.password]
      );
      res.send('User registered');
      // res.json(newUser);

    // Return jsonwebtoken
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }




  console.log(req.body);
 // res.send('Create account route');
});

module.exports = router;