"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const customers_service_1 = tslib_1.__importDefault(require("../services/customers.service"));
const validator_handler_1 = tslib_1.__importDefault(require("../middlewares/validator.handler"));
const customers_schema_1 = require("../schemas/customers.schema");
const http_status_enum_1 = require("../shared/enums/http-status.enum");
const router = express_1.default.Router();
const service = new customers_service_1.default();
router.get('/', async (_req, res) => {
    const customers = await service.findAll();
    res.json({
        status: http_status_enum_1.HttpStatus.OK,
        data: customers
    });
});
router.get('/:id', (0, validator_handler_1.default)(customers_schema_1.getCustomerSchema, 'params'), async (req, res) => {
    const { id } = req.params;
    const customer = await service.findById(id);
    res.json({
        status: http_status_enum_1.HttpStatus.OK,
        data: customer
    });
});
router.post('/', (0, validator_handler_1.default)(customers_schema_1.createCustomerSchema, 'body'), async (req, res) => {
    const customer = await service.create(req.body);
    res.json({
        status: http_status_enum_1.HttpStatus.CREATED,
        data: customer
    });
});
router.patch('/:id', (0, validator_handler_1.default)(customers_schema_1.getCustomerSchema, 'params'), (0, validator_handler_1.default)(customers_schema_1.partialUpdateCustomerSchema, 'body'), async (req, res) => {
    const { body, params } = req;
    const { id } = params;
    const customer = await service.update(id, body);
    res.json({
        status: http_status_enum_1.HttpStatus.OK,
        data: customer
    });
});
router.delete('/:id', (0, validator_handler_1.default)(customers_schema_1.getCustomerSchema, 'params'), async (req, res) => {
    const { id } = req.params;
    await service.delete(id);
    res.json({
        status: http_status_enum_1.HttpStatus.OK,
        data: id
    });
});
exports.default = router;
//# sourceMappingURL=customers.routes.js.map