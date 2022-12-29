import express from 'express'
import CustomersService from '@services/customers.service'
import validatorHandler from '@middlewares/validator.handler'
import {
  getCustomerSchema,
  createCustomerSchema,
  partialUpdateCustomerSchema
} from '@schemas/customers.schema'
import { HttpStatus } from '@shared/enums/http-status.enum'

const router = express.Router()

const service = new CustomersService()

router.get('/', async (_req, res) => {
  const customers = await service.findAll()
  res.json({
    status: HttpStatus.OK,
    data: customers
  })
})

router.get(
  '/:id',
  validatorHandler(getCustomerSchema, 'params'),
  async (req, res) => {
    const { id } = req.params
    const customer = await service.findById(id)
    res.json({
      status: HttpStatus.OK,
      data: customer
    })
  }
)

router.post(
  '/',
  validatorHandler(createCustomerSchema, 'body'),
  async (req, res) => {
    const customer = await service.create(req.body)

    res.json({
      status: HttpStatus.CREATED,
      data: customer
    })
  }
)

router.patch(
  '/:id',
  validatorHandler(getCustomerSchema, 'params'),
  validatorHandler(partialUpdateCustomerSchema, 'body'),
  async (req, res) => {
    const { body, params } = req
    const { id } = params

    const customer = await service.update(id, body)

    res.json({
      status: HttpStatus.OK,
      data: customer
    })
  }
)

router.delete(
  '/:id',
  validatorHandler(getCustomerSchema, 'params'),
  async (req, res) => {
    const { id } = req.params

    await service.delete(id)

    res.json({
      status: HttpStatus.OK,
      data: id
    })
  }
)

export default router
