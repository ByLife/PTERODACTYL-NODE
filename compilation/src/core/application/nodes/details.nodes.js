"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nodeDetails = void 0;
const request_1 = require("../../request");
async function NodeDetails(nodes_id) {
    return (0, request_1.Request)('get', `/application/nodes/${nodes_id}`, request_1.headers);
}
async function NodeConfiguration(nodes_id) {
    return (0, request_1.Request)('get', `/application/nodes/${nodes_id}/configuration`, request_1.headers);
}
exports.nodeDetails = {
    details: NodeDetails,
    configuration: NodeConfiguration,
};
