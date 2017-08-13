'use strict';
const express = require('express');
const router = express.Router();
const StatisticsController = require('../controllers').Statistics;

router.route('/')
  .get(StatisticsController.getAll);

router.route('/:id')
  .get(StatisticsController.getById)
  .put(StatisticsController.update);

module.exports = router;
