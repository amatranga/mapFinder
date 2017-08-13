'use strict';
const express = require('express');
const router = express.Router();

router.route('/')
  .get((req, res) => {
    res.status(200).send('Hello API!');
  })
  .post((req, res) => {
    res.status(201).send({ data: 'POSTED!' });
  });

module.exports = router;
