'use strict';
const express = require('express');
const router = express.Router();
const SettingsController = require('../controllers').Settings;

router.route('/')
  .post(SettingsController.create);

router.route('/settings/:id')
  .put(SettingsController.updateById);

module.exports = router;
