export const config = {
  development: {
    db: {
      client: 'sqlite3',
      connection: {
        filename: './dev.sqlite3',
      },
    },
    secret: 'SOME_SECRET_KEY',
  },
  staging: {
    db: {
      client: 'postgresql',
      connection: {
        database: 'my_db',
        user: 'username',
        password: 'password',
      },
      pool: {
        min: 2,
        max: 10,
      },
      migrations: {
        tableName: 'knex_migrations',
      },
      secret: 'SOME_SECRET_KEY',
    },
  },
  production: {
    db: {
      client: 'postgresql',
      connection: {
        database: 'my_db',
        user: 'username',
        password: 'password',
      },
      pool: {
        min: 2,
        max: 10,
      },
      migrations: {
        tableName: 'knex_migrations',
      },
      secret: 'SOME_SECRET_KEY',
    },
  },
};
