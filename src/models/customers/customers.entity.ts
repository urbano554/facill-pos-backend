import mongoose, { Document } from 'mongoose'
import { Customer } from '@shared/interfaces/customers.interface'

export type CustomerDocument = Document<string, any, Omit<Customer, '_id'>>

const customerSchema = new mongoose.Schema<Omit<Customer, '_id'>>({
  name: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  documentNumber: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    required: true
  },
  updatedAt: Date
})

const CustomersEntity = mongoose.model('Customers', customerSchema)

export default CustomersEntity
