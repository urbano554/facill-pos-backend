import { Router, Express } from 'express'
import customersRouter from './customers.routes'

const router = (app: Express) => {
  const router = Router()
  app.use('/api/v1', router)
  router.use('/customers', customersRouter)
}

export default router
