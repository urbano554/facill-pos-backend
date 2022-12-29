"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const dotenv = tslib_1.__importStar(require("dotenv"));
dotenv.config();
const env = process.env.ENV;
const domain = process.env.DOMAIN;
const authorizedDomains = env === 'dev'
    ? [
        'http://localhost:3000/',
        'http://localhost:3001/',
        'http://localhost:8080',
        'http://127.0.0.1:5500',
        domain
    ]
    : [domain];
const config = {
    ENV: env,
    PORT: process.env.PORT,
    MONGO_URI: process.env.MONGO_URI,
    AUTHORIZED_DOMAINS: authorizedDomains
};
exports.default = config;
//# sourceMappingURL=config.js.map