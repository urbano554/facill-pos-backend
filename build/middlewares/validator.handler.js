"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const boom_1 = tslib_1.__importDefault(require("@hapi/boom"));
function validatorHandler(schema, property) {
    return (req, _res, next) => {
        const data = req[property];
        const { error } = schema.validate(data, { abortEarly: false });
        if (error) {
            next(boom_1.default.badRequest(error));
            return;
        }
        next();
    };
}
exports.default = validatorHandler;
//# sourceMappingURL=validator.handler.js.map