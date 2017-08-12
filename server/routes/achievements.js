'use strict';
const express = require('express');
const router = express.Router();
const AchievementsController = require('../controllers').Achievements;

router.route('/')
  .post(AchievementsController.create);

router.route('/achievements/:id')
  .get(AchievementsController.updateById);

module.exports = router;
