var express = require('express');
var router = express.Router();
let State = require('../model/state');

// /api/v1/state

// All States
router.get('/', function (req, res, next) {
  State.find({}, (error, state) => {
    if (error) {
      next(error);
    } else {
      res.status(200).json(state);
    }
  });
});

// Create State
router.post('/', (req, res, next) => {
  State.create(req.body, (error, state) => {
    if (error) {
      next(error);
    } else {
      res.status(200).json(state);
    }
  });
});

// Update State
router.put('/:id', (req, res, next) => {
  let id = req.params.id;
  State.findByIdAndUpdate(id, req.body, { new: true }, (error, state) => {
    if (error) {
      next(error);
    } else {
      res.status(200).json(state);
    }
  });
});

// Delete State
router.delete('/:id', (req, res, next) => {
  let id = req.params.id;
  State.findByIdAndDelete(id, (error, state) => {
    if (error) {
      next(error);
    } else {
      res.status(200).json(state);
    }
  });
});

module.exports = router;
