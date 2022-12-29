import express from 'express'
import cors from 'cors'
import routerApi from '@routes'
import {
  logErrors,
  errorHandler,
  boomErrorHandler
} from '@middlewares/error.handler'
import { connectMongo } from '@utils/db-connections.utils'
import config from '@config'

const app = express()

const options: cors.CorsOptions = {
  origin: (origin, callback) => {
    if (config.AUTHORIZED_DOMAINS.includes(origin) || !origin) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

app.use(cors(options))

app.use(express.json())

app.listen(config.PORT, () => {
  console.log('Running on port:', config.PORT)
})

connectMongo()

routerApi(app)

app.use(logErrors)
app.use(boomErrorHandler)
app.use(errorHandler)
