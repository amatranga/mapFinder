'use strict';
const express = require('express');
const router = express.Router();
const StatisticsController = require('../controllers').Statistics;

router.route('/')
  .post(StatisticsController.create)
  .get(StatisticsController.getAll);

router.route('/:id')
  .get(StatisticsController.getById)
  .put(StatisticsController.update);

module.exports = router;
