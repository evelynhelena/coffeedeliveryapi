import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('product', (table) => {
    table.uuid('id').primary()
    table.string('imageName')
    table.string('name')
    table.string('description')
    table.float('price')
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('product')
}
