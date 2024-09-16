import { FastifyInstance } from 'fastify'
import { knex } from '../database'

export async function GetPorcentValue(app: FastifyInstance) {
  app.get('/', async (_, res) => {
    try {
      const response = await knex('porcent').select('*')
      return response
    } catch {
      return res.status(500).send('internal server error')
    }
  })
}
