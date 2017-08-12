'use strict';
const express = require('express');
const router = express.Router();
const MyMapController = require('../controllers').MyMap;

router.route('/')
  .post(MyMapController.create)
  .get(MyMapController.getAll);

module.exports = router;
