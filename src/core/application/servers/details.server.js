"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerDetails = void 0;
const config_1 = require("../../../config/config");
const index_1 = require("../../request/index");
async function ServerDetails(server_id) {
    return await (0, index_1.Request)('get', `/application/servers/${server_id}`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${config_1.Config.PTEROAPI.KEY}`,
            'Cookie': `pterodactyl_session=${config_1.Config.PTEROAPI.SESSION}`
        }
    });
}
exports.ServerDetails = ServerDetails;
