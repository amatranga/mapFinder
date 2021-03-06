'use strict';
const express = require('express');
const router = express.Router();
const AchievementsController = require('../controllers').Achievements;

router.route('/')
  .get(AchievementsController.getAll);

router.route('/:id')
  .get(AchievementsController.getById)
  .put(AchievementsController.update);

module.exports = router;
