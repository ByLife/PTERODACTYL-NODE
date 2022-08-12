"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreate = void 0;
const index_1 = require("../../index");
async function UserCreate(options) {
    return (0, index_1.Request)('post', "/application/users", index_1.headers, options);
}
exports.UserCreate = UserCreate;
