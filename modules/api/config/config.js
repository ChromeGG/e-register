const commonConfig = {
  port: 3000,
  host: "0.0.0.0",
  db: {
    // client: 'postgresql',
    // debug: false,
    // asyncStackTraces: false,
    // connection: {
    //   user: 'fast_food',
    //   database: 'fast_food',
    //   password: 'test',
    //   port: 5432
    // },
    // pool: {
    //   min: 0,
    //   max: 5
    // },
    // idleTimeoutMillis: 30 * 1000,
    // acquireConnectionTimeout: 5 * 1000,
    // migrations: {
    //   tableName: 'knex_migrations',
    //   directory: `${__dirname}/../database/migrations`
    // },
    // seeds: {
    //   directory: `${__dirname}/../database/seeders`
    // }
  }
}

export { commonConfig }