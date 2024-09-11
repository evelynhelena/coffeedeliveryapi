import type { Knex } from 'knex'
import { randomUUID } from 'node:crypto'

export async function up(knex: Knex): Promise<void> {
  await knex.schema
    .createTable('porcent', (table) => {
      table.uuid('id').primary()
      table.float('porcentValue')
    })
    .then(() => {
      return knex('porcent').insert([{ id: randomUUID(), porcentValue: 7.0 }])
    })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('porcent')
}
