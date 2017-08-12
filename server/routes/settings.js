'use strict';
const express = require('express');
const router = express.Router();
const SettingsController = require('../controllers').Settings;

router.route('/')
  .post(SettingsController.create)
  .get(SettingsController.getAll);

router.route('/:id')
  .get(SettingsController.getById)
  .put(SettingsController.updateById);

module.exports = router;
