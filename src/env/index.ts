import 'dotenv/config'

import { z } from 'zod'

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('production'),
  DATA_BASE_HOST: z.string(),
  DATA_BASE_PORT: z.string(),
  DATA_BASE_USER: z.string(),
  DATA_PASSWORD: z.string(),
  DATA_BASE_NAME: z.string(),
  PORT: z.number().default(3333),
})

const _env = envSchema.safeParse(process.env)

if (_env.success === false) {
  console.error('⚠️ Invalid enviroment variables', _env.error.format())

  throw new Error('Invalid environment variables')
}

export const env = _env.data
