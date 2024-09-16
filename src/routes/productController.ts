import { FastifyInstance } from 'fastify'
import { knex } from '../database'
import { z } from 'zod'

export async function ProductController(app: FastifyInstance) {
  app.get('/', async (_, res) => {
    try {
      return await knex('product').select('*')
    } catch {
      return res.status(500).send('internal server error')
    }
  })
  app.post('/insert-types', async (req, res) => {
    const createProductTypesSchema = z.object({
      idProduct: z.string(),
      idTypes: z.object({ data: z.array(z.string()) }),
    })

    const { idProduct, idTypes } = createProductTypesSchema.parse(req.body)

    try {
      const inserts = idTypes.data.map(async (type) => {
        await knex('product_types').insert({
          fk_product_id: idProduct,
          fk_type_id: type,
        })
      })
      Promise.all(inserts)

      return res.status(201).send()
    } catch (err) {
      return res.status(500).send(err)
    }
  })
}
