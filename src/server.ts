import fastify from 'fastify'
import { env } from './env'
import fastifyCors from '@fastify/cors'
import { ShoppingController } from './routes/shoppingController'
import { GetPorcentValue } from './routes/getPorcentValue'
import { ProductController } from './routes/productController'

const app = fastify()

app.register(fastifyCors, {
  // Arruma o erro de cors
  origin: '*',
  methods: ['GET', 'PUT', 'POST'],
})

app.register(ShoppingController, {
  prefix: 'types',
})
app.register(GetPorcentValue, {
  prefix: 'porcent',
})
app.register(ProductController, {
  prefix: 'product',
})

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('Http server listening on port 3333')
  })
