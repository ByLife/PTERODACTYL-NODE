"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerDetails = void 0;
const request_1 = require("../../request");
async function ServerDetails(server_id) {
    return await (0, request_1.Request)('get', `/application/servers/${server_id}`, request_1.headers);
}
exports.ServerDetails = ServerDetails;
