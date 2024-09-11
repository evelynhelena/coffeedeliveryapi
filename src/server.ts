import fastify from 'fastify'
import { env } from './env'
import { CreateTypes } from './routes/typesController'
// import crypto from 'node:crypto'

const app = fastify()

app.register(CreateTypes, {
  prefix: 'types',
})

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('Http server listening on port 3333')
  })
