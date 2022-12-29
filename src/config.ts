import * as dotenv from 'dotenv'

dotenv.config()

export type Envs = 'dev' | 'prod'

const env: Envs = process.env.ENV as Envs
const domain = process.env.DOMAIN

const authorizedDomains =
  env === 'dev'
    ? [
        'http://localhost:3000/',
        'http://localhost:3001/',
        'http://localhost:8080',
        'http://127.0.0.1:5500',
        domain
      ]
    : [domain]

const config = {
  ENV: env,
  PORT: process.env.PORT,
  MONGO_URI: process.env.MONGO_URI,
  AUTHORIZED_DOMAINS: authorizedDomains
}

export default config
