import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('product_types', (table) => {
    table.uuid('fk_product_id')
    table.uuid('fk_type_id')

    table.foreign('fk_product_id').references('id').inTable('product')
    table.foreign('fk_type_id').references('id').inTable('types')
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('product_types')
}
