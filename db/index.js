const knex = require('knex')(require('../knexfile'));
const db = require('bookshelf')(knex);

db.plugin('registery');

module.exports = db;
