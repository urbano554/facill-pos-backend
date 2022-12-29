import CustomersRepository from '@models/customers/customers.repository'

import { Customer } from '@shared/interfaces/customers.interface'
import type {
  CreateCustomer,
  UpdateCustomer
} from '@shared/types/customers.type'

export default class CustomersService {
  private readonly customersRepository: CustomersRepository

  constructor() {
    this.customersRepository = new CustomersRepository()
  }

  async findAll(): Promise<Customer[]> {
    const customers = await this.customersRepository.findAll()
    return customers.map((customer) => customer.toObject())
  }

  async findById(id: string): Promise<Customer> {
    const customer = await this.customersRepository.findById(id)
    return customer.toObject()
  }

  async create(data: CreateCustomer): Promise<Customer> {
    const customer = await this.customersRepository.create(data)
    return customer.toObject()
  }

  async update(id: string, data: UpdateCustomer): Promise<Customer> {
    const customer = await this.customersRepository.update(id, data)
    return customer.toObject()
  }

  async delete(id: string): Promise<string> {
    await this.customersRepository.delete(id)
    return id
  }
}
