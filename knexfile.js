require('dotenv').config();

module.exports = {
  //Development database
  development: {
    client: 'postgresql',
    connection: {
      database: process.env.DB_DATABASE,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      host: process.env.DB_HOST,
      port: 5432
    },
    pool: {
      min: 1,
      max: 2
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: 'db/migrations'
    },
    seeds: {
      directory: 'db/seeds/development'
    }
  },

  //Testing database
  test: {
    client: 'postgresql',
    connection: {
      database: 'testing_db',
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      host: process.env.DB_HOST
    },
    pool: {
      min: 1,
      max: 2
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: 'db/migrations'
    },
    seeds: {
      directory: 'db/seeds/test'
    }
  },

  //Production database
  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 1,
      max: 2
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: 'db/migrations'
    },
    seeds: {
      directory: 'db/seeds/test'
    }
  }
}
