var express = require('express');
var router = express.Router();
let Country = require('../model/country');

// /api/v1/country

// All countries
router.get('/', function (req, res, next) {
  res.status(200).json({ country: 'India' });
});

router.post('/', (req, res, next) => {
  Country.create(req.body, (error, country) => {
    if (error) {
      next(error);
    } else {
      res.status(200).json(country);
    }
  });
});

module.exports = router;
