"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const customers_repository_1 = tslib_1.__importDefault(require("../models/customers/customers.repository"));
class CustomersService {
    customersRepository;
    constructor() {
        this.customersRepository = new customers_repository_1.default();
    }
    async findAll() {
        const customers = await this.customersRepository.findAll();
        return customers.map((customer) => customer.toObject());
    }
    async findById(id) {
        const customer = await this.customersRepository.findById(id);
        return customer.toObject();
    }
    async create(data) {
        const customer = await this.customersRepository.create(data);
        return customer.toObject();
    }
    async update(id, data) {
        const customer = await this.customersRepository.update(id, data);
        return customer.toObject();
    }
    async delete(id) {
        await this.customersRepository.delete(id);
        return id;
    }
}
exports.default = CustomersService;
//# sourceMappingURL=customers.service.js.map