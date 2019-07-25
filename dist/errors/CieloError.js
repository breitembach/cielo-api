"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CieloError extends Error {
    constructor(init) {
        super(init.message);
        Object.assign(this, init);
    }
}
exports.default = CieloError;
