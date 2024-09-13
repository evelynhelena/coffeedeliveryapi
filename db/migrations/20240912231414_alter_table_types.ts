import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.schema
    .alterTable('types', (table) => {
      table.string('acronym')
    })
    .then(async () => {
      await knex('types')
        .where('name', 'Gelado')
        .update({ acronym: 'GE' })
        .then(async () => {
          await knex('types')
            .where('name', 'Especial')
            .update({ acronym: 'ES' })
        })
        .then(async () => {
          await knex('types')
            .where('name', 'Tradicional')
            .update({ acronym: 'TR' })
        })
        .then(async () => {
          await knex('types')
            .where('name', 'Alcoólico')
            .update({ acronym: 'AL' })
        })
        .then(async () => {
          await knex('types')
            .where('name', 'Com Leite')
            .update({ acronym: 'CL' })
        })
    })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.alterTable('types', function (table) {
    table.dropColumn('acronym')
  })
}
