"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodesList = void 0;
const request_1 = require("../../request");
async function NodesList() {
    return await (0, request_1.Request)('get', `/application/nodes`, request_1.headers);
}
exports.NodesList = NodesList;
