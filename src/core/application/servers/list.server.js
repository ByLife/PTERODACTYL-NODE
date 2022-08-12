"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerList = void 0;
const request_1 = require("../../request");
async function ServerList() {
    return await (0, request_1.Request)('get', "/application/servers", request_1.headers);
}
exports.ServerList = ServerList;
