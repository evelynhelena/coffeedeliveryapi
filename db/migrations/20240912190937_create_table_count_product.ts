import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('count_product', (table) => {
    table.uuid('id').primary()
    table.float('count')
    table.uuid('fk_product_id')

    table.foreign('fk_product_id').references('id').inTable('product')
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('count_product')
}
