export interface Customer {
  _id: string;
  name: string;
  lastName: string;
  documentNumber: string;
  address: string;
  phoneNumber: string;
  createdAt: Date;
  updatedAt?: Date;
}
