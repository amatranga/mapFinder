'use strict';
const express = require('express');
const router = express.Router();
const MyMapController = require('../controllers').MyMap;

router.route('/')
  .get(MyMapController.getAll);

module.exports = router;
