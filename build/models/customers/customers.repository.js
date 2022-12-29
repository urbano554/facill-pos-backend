"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const customers_entity_1 = tslib_1.__importDefault(require("./customers.entity"));
class CustomersRepository {
    async findAll() {
        return customers_entity_1.default.find().sort({ createdAt: -1 });
    }
    async findById(id) {
        return customers_entity_1.default.findById(id);
    }
    async create(data) {
        const customer = await customers_entity_1.default.create({
            ...data,
            createdAt: new Date()
        });
        return customer;
    }
    async update(id, data) {
        await customers_entity_1.default.findByIdAndUpdate(id, {
            ...data,
            updatedAt: new Date()
        });
        return customers_entity_1.default.findById(id);
    }
    async delete(id) {
        await customers_entity_1.default.findByIdAndDelete(id);
        return id;
    }
}
exports.default = CustomersRepository;
//# sourceMappingURL=customers.repository.js.map