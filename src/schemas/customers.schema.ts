import Joi from 'joi'

const id = Joi.string().id()

const name = Joi.string().min(3).max(45)
const lastName = Joi.string().min(3).max(45)
const documentNumber = Joi.string().min(5)
const address = Joi.string().min(3).max(40)
const phoneNumber = Joi.string().min(8).max(16)

export const getCustomerSchema = Joi.object({
  id: id.required()
})

export const createCustomerSchema = Joi.object({
  name: name.required(),
  lastName: lastName.required(),
  documentNumber: documentNumber.required(),
  address: address.required(),
  phoneNumber: phoneNumber.required()
})

export const partialUpdateCustomerSchema = Joi.object({
  name: name.optional(),
  lastName: lastName.optional(),
  documentNumber: documentNumber.optional(),
  address: address.optional(),
  phoneNumber: phoneNumber.optional()
})
