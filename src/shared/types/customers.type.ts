import { Customer } from '../interfaces/customers.interface'

export type CreateCustomer = Omit<
  Omit<Omit<Customer, '_id'>, 'createdAt'>,
  'updatedAt'
>;

export type UpdateCustomer = Partial<CreateCustomer>;
