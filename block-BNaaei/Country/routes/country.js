var express = require('express');
var router = express.Router();
let Country = require('../model/country');

// /api/v1/country

// All countries
router.get('/', function (req, res, next) {
  Country.find({}, (error, countries) => {
    if (error) {
      next(error);
    } else {
      res.status(200).json(countries);
    }
  });
});

// Create country
router.post('/', (req, res, next) => {
  Country.create(req.body, (error, country) => {
    if (error) {
      next(error);
    } else {
      res.status(200).json(country);
    }
  });
});

// Update Country
router.put('/:id', (req, res, next) => {
  let id = req.params.id;
  Country.findByIdAndUpdate(id, req.body, { new: true }, (error, country) => {
    if (error) {
      next(error);
    } else {
      res.status(200).json(country);
    }
  });
});

// Delete Country
router.delete('/:id', (req, res, next) => {
  let id = req.params.id;
  Country.findByIdAndDelete(id, (error, country) => {
    if (error) {
      next(error);
    } else {
      res.status(200).json(country);
    }
  });
});

module.exports = router;
