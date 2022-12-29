"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const cors_1 = tslib_1.__importDefault(require("cors"));
const _routes_1 = tslib_1.__importDefault(require("./routes/index"));
const error_handler_1 = require("./middlewares/error.handler");
const db_connections_utils_1 = require("./utils/db-connections.utils");
const _config_1 = tslib_1.__importDefault(require("./config.js"));
const app = (0, express_1.default)();
const options = {
    origin: (origin, callback) => {
        if (_config_1.default.AUTHORIZED_DOMAINS.includes(origin) || !origin) {
            callback(null, true);
        }
        else {
            callback(new Error('Not allowed by CORS'));
        }
    }
};
app.use((0, cors_1.default)(options));
app.use(express_1.default.json());
app.listen(_config_1.default.PORT, () => {
    console.log('Running on port:', _config_1.default.PORT);
});
(0, db_connections_utils_1.connectMongo)();
(0, _routes_1.default)(app);
app.use(error_handler_1.logErrors);
app.use(error_handler_1.boomErrorHandler);
app.use(error_handler_1.errorHandler);
//# sourceMappingURL=main.js.map