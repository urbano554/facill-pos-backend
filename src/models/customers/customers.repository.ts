import CustomersModel from './customers.entity'
import type {
  CreateCustomer,
  UpdateCustomer
} from '@shared/types/customers.type'

export default class CustomersRepository {
  async findAll() {
    return CustomersModel.find().sort({ createdAt: -1 })
  }

  async findById(id: string) {
    return CustomersModel.findById(id)
  }

  async create(data: CreateCustomer) {
    const customer = await CustomersModel.create({
      ...data,
      createdAt: new Date()
    })

    return customer
  }

  async update(id: string, data: UpdateCustomer) {
    await CustomersModel.findByIdAndUpdate(id, {
      ...data,
      updatedAt: new Date()
    })

    return CustomersModel.findById(id)
  }

  async delete(id: string) {
    await CustomersModel.findByIdAndDelete(id)

    return id
  }
}
