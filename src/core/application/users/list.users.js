"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersList = void 0;
const request_1 = require("../../request");
async function UsersList() {
    return await (0, request_1.Request)('get', "/application/users", request_1.headers);
}
exports.UsersList = UsersList;
