"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteUser = void 0;
const index_1 = require("../../index");
async function DeleteUser(user_id) {
    return (await (0, index_1.Request)('delete', `/application/users/${user_id}`, index_1.headers)).status;
}
exports.DeleteUser = DeleteUser;
