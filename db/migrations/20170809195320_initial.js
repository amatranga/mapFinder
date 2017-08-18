exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTableIfNotExists('profiles', (table) => {
      table.increments('id').unsigned().primary();
      table.string('first', 100).nullable();
      table.string('last', 100).nullable();
      table.string('display', 100).nullable();
      table.string('email', 100).nullable().unique();
      table.string('country', 100).nullable();
      table.timestamps(true, true);
    }),
    knex.schema.createTableIfNotExists('auths', (table) => {
      table.increments('id').unsigned().primary();
      table.string('type', 8).notNullable();
      table.string('oauth_id', 30).nullable();
      table.integer('profile_id').references('profiles.id').onDelete('CASCADE');
    }),
    knex.schema.createTableIfNotExists('statistics', (table) => {
      table.increments('id').unsigned().primary();
      table.integer('sq_mi_visited').notNullable();
      table.integer('sq_km_visited').notNullable();
      table.integer('country_size_sq_mi').notNullable();
      table.integer('country_size_sq_km').notNullable();
      table.string('percent_of_country_visited').notNullable();
      table.string('percent_of_world_visited').notNullable();
      table.integer('profile_id').references('id').inTable('profiles').onDelete('CASCADE');
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('statistics'),
    knex.schema.dropTable('auths'),
    knex.schema.dropTable('profiles')
  ]);
};
