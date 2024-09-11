import { FastifyInstance } from 'fastify'
import { randomUUID } from 'node:crypto'
import { knex } from '../database'

export async function CreateTypes(app: FastifyInstance) {
  app.post('/', async (_, res) => {
    try {
      await knex('types').insert({
        id: randomUUID(),
        name: ['Gelado', 'Com Leite', 'Especial', 'Alcoólico'],
      })
    } catch {
      return res.status(500).send('internal server error')
    }
    return res.status(201).send()
  })

  app.patch('/', async (_, res) => {
    try {
      const response = await knex('types')
      return response
    } catch {
      return res.status(500).send('internal server error')
    }
  })

  app.get('/', async (_, res) => {
    try {
      const response = await knex('types').select('*')
      return response
    } catch {
      return res.status(500).send('internal server error')
    }
  })
}
