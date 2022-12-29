"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = require("express");
const customers_routes_1 = tslib_1.__importDefault(require("./customers.routes"));
const router = (app) => {
    const router = (0, express_1.Router)();
    app.use('/api/v1', router);
    router.use('/customers', customers_routes_1.default);
};
exports.default = router;
//# sourceMappingURL=index.js.map