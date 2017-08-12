'use strict';
const express = require('express');
const router = express.Router();
const AchievementsController = require('../controllers').Achievements;

router.route('/')
  .post(AchievementsController.create)
  .get(AchievementsController.getAll);

router.route('/:id')
  .get(AchievementsController.getById)
  .put(AchievementsController.update);

module.exports = router;
