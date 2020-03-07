export const config = {
  development: {
    db: {
      client: 'sqlite3',
      connection: {
        filename: './dev.sqlite3',
      },
    },
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
    },
  },
};
