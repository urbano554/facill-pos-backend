"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectMongo = void 0;
const tslib_1 = require("tslib");
const mongoose_1 = tslib_1.__importDefault(require("mongoose"));
const config_1 = tslib_1.__importDefault(require("../config"));
const connectMongo = () => {
    return mongoose_1.default.connect(config_1.default.MONGO_URI);
};
exports.connectMongo = connectMongo;
//# sourceMappingURL=db-connections.utils.js.map