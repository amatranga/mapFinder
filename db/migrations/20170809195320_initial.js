exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTableIfNotExists('profiles', (table) => {
      table.increments('id').unsigned().primary();
      table.string('first', 100).nullable();
      table.string('last', 100).nullable();
      table.string('email', 100).nullable().unique();
      table.string('country', 100).notNullable();
      table.json('maps').nullable();
      table.timestamps(true, true);
    }),
    knex.schema.createTableIfNotExists('auths', (table) => {
      table.increments('id').unsigned().primary();
      table.string('type', 8).notNullable();
      table.string('oauth_id', 30).nullable();
      table.integer('profile_id').references('profiles.id').onDelete('CASCADE');
    }),
    knex.schema.createTableIfNotExists('achievements', (table) => {
      table.increments('id').unsigned().primary();
      table.integer('profile_id').references('profiles.id').onDelete('CASCADE');
      //TODO: Insert table.boolean here for each achievement. Default to false
    }),
    knex.schema.createTableIfNotExists('statistics', (table) => {
      table.increments('id').unsigned().primary();
      table.integer('sq_mi_visited').notNullable();
      table.integer('sq_km_visited').notNullable();
      table.integer('country_size_sq_mi').notNullable();
      table.integer('country_size_sq_km').notNullable();
      table.string('percent_of_country_visited').notNullable();
      table.string('percent_of_world_visited').notNullable();
      table.integer('profile_id').references('profiles.id').onDelete('CASCADE');
    }),
    knex.schema.createTableIfNotExists('settings', (table) => {
      table.increments('id').unsigned().primary();
      table.integer('profile_id').references('profiles.id').onDelete('CASCADE');
      //TODO: Insert table.boolean here for each setting. Default to false
    }),
    knex.schema.createTableIfNotExists('maps', (table) => {
      table.increments('id').unsigned().primary();
      table.integer('profile_id').references('profiles.id').onDelete('CASCADE');
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('maps'),
    knex.schema.dropTable('settings'),
    knex.schema.dropTable('statistics'),
    knex.schema.dropTable('achievements'),
    knex.schema.dropTable('auths'),
    knex.schema.dropTable('profiles')
  ]);
};
