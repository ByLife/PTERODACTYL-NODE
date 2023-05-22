"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersCreate = void 0;
const index_1 = require("../../index");
async function UsersCreate(options) {
    return (await (0, index_1.Request)('post', "/application/users", index_1.headers, options)).status;
}
exports.UsersCreate = UsersCreate;
