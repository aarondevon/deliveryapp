require('dotenv').config();

const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const pool = require('../../db');
const auth = require('../../middleware/auth');

// @route     GET api/auth
// @desc      Test Route
// @access    Public
router.get('/', auth, async (req, res) => {
  try {
    const user = await pool.query(
      'SELECT account_user_name, account_user_email FROM account WHERE account_id = $1',
      [req.user.id]
    );
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
  // res.send('Auth route')
});

// @route     POST api/auth
// @desc      Authenticate User & get token
// @access    Public
router.post(
  '/',
  [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      // Get user
      let user = await pool.query(
        'SELECT account_id, account_user_email, account_user_password  FROM account WHERE account_user_email = $1',
        [email]
      );
      console.log('I am the user', user);
      if (user.rowCount !== 1) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid credentials' }] });
      }

      // const userObj = {
      //   email: email,
      //   password: password,
      // };

      // Return jsonwebtoken
      // userObj.id = user.rows[0].account_id;
      const payload = {
        user: {
          id: user.rows[0].account_id,
        },
      };
      console.log(password);
      // Match password
      const isMatch = await bcrypt.compare(
        password,
        user.rows[0].account_user_password
      );

      if (!isMatch) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid credentials' }] });
      }

      // Sign token
      jwt.sign(
        payload,
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );

      console.log('Hi, I exist and here is my data ', user);
      console.log('Yeah, I am an ID ', payload.user.id);
    } catch (err) {
      console.error(err);
      res.status(500).send('Server error');
    }

    console.log('Some sweet data', req.body);
    //res.send('Create account route');
  }
);

module.exports = router;
