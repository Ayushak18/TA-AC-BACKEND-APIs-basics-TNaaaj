var express = require('express');
var router = express.Router();

// /api/v1/state

router.get('/', function (req, res, next) {
  res.status(200).json({ state: 'Uttrakhand' });
});

module.exports = router;
