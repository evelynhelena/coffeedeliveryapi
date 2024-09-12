import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('shopping', (table) => {
    table.uuid('id').primary()
    table.string('cep')
    table.string('logradouro')
    table.string('number')
    table.string('complement')
    table.string('neighborhood')
    table.string('city')
    table.string('state')
    table.string('paymentType')

    table.string('count_product_id')
    table.foreign('count_product_id').references('id').inTable('count_product')
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('shopping')
}
