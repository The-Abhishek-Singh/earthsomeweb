const express = require('express');
const router = express.Router();


router.get('/', function (req, res) {
  res.send('Owners route is working');
});


module.exports = router;