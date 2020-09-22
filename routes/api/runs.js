const express = require('express');
const router = express.Router();

// @route     GET api/runs
// @desc      Test Route
// @access    Public
router.get('/', (req, res) => res.send('Runs route'));

module.exports = router;