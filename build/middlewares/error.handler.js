"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.boomErrorHandler = exports.errorHandler = exports.logErrors = void 0;
function logErrors(err, _req, _res, next) {
    next(err);
}
exports.logErrors = logErrors;
function errorHandler(err, _req, res) {
    res.status(500).json({
        error: err.message
    });
}
exports.errorHandler = errorHandler;
function boomErrorHandler(err, _req, res, next) {
    if (err.isBoom) {
        res.status(err.output.statusCode).json({
            error: err.output.payload
        });
    }
    else {
        next(err);
    }
}
exports.boomErrorHandler = boomErrorHandler;
//# sourceMappingURL=error.handler.js.map