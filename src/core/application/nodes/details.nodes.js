"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nodeDetails = void 0;
const config_1 = require("../../../config");
const request_1 = require("../../request");
async function NodeDetails(nodes_id) {
    return (0, request_1.Request)('get', `/application/nodes/${nodes_id}`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${config_1.Config.PTEROAPI.KEY}`,
            'Cookie': `pterodactyl_session=${config_1.Config.PTEROAPI.SESSION}`
        }
    });
}
async function NodeConfiguration(nodes_id) {
    return (0, request_1.Request)('get', `/application/nodes/${nodes_id}/configuration`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${config_1.Config.PTEROAPI.KEY}`,
            'Cookie': `pterodactyl_session=${config_1.Config.PTEROAPI.SESSION}`
        }
    });
}
exports.nodeDetails = {
    details: NodeDetails,
    configuration: NodeConfiguration,
};
