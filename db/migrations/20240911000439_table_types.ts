import type { Knex } from 'knex'
import { randomUUID } from 'node:crypto'

export async function up(knex: Knex): Promise<void> {
  await knex.schema
    .createTable('types', (table) => {
      table.uuid('id').primary()
      table.string('name')
    })
    .then(() => {
      return knex('types').insert([
        { id: randomUUID(), name: 'Tradicional' },
        { id: randomUUID(), name: 'Gelado' },
        { id: randomUUID(), name: 'Com Leite' },
        { id: randomUUID(), name: 'Especial' },
        { id: randomUUID(), name: 'Alcoólico' },
      ])
    })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('types')
}
