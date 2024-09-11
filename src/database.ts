import { knex as setupKnex, Knex } from 'knex'
import { env } from './env'

export const configDatabase: Knex.Config = {
  client: 'mysql2',
  connection: {
    host: env.DATA_BASE_HOST,
    port: Number(env.DATA_BASE_PORT),
    user: env.DATA_BASE_USER,
    password: env.DATA_PASSWORD,
    database: env.DATA_BASE_NAME,
  },
  useNullAsDefault: true,
  migrations: {
    extension: 'ts',
    directory: './db/migrations',
  },
}

export const knex = setupKnex(configDatabase)
