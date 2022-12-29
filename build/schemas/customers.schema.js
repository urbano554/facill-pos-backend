"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.partialUpdateCustomerSchema = exports.createCustomerSchema = exports.getCustomerSchema = void 0;
const tslib_1 = require("tslib");
const joi_1 = tslib_1.__importDefault(require("joi"));
const id = joi_1.default.string().id();
const name = joi_1.default.string().min(3).max(45);
const lastName = joi_1.default.string().min(3).max(45);
const documentNumber = joi_1.default.string().min(5);
const address = joi_1.default.string().min(3).max(40);
const phoneNumber = joi_1.default.string().min(8).max(16);
exports.getCustomerSchema = joi_1.default.object({
    id: id.required()
});
exports.createCustomerSchema = joi_1.default.object({
    name: name.required(),
    lastName: lastName.required(),
    documentNumber: documentNumber.required(),
    address: address.required(),
    phoneNumber: phoneNumber.required()
});
exports.partialUpdateCustomerSchema = joi_1.default.object({
    name: name.optional(),
    lastName: lastName.optional(),
    documentNumber: documentNumber.optional(),
    address: address.optional(),
    phoneNumber: phoneNumber.optional()
});
//# sourceMappingURL=customers.schema.js.map