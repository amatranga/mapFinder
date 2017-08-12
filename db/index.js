const knexfile = require('../knexfile');
const knex = require('knex')(knexfile['development']);
const db = require('bookshelf')(knex);

db.plugin('registry');

module.exports = db;
