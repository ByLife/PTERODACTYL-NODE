"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersUpdate = void 0;
const index_1 = require("../../index");
async function UsersUpdate(options) {
    return (0, index_1.Request)('patch', "/application/users", index_1.headers, options);
}
exports.UsersUpdate = UsersUpdate;
