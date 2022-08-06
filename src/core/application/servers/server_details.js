"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerDetails = void 0;
const config_1 = require("../../../config/config");
const request_1 = require("../../request/request");
async function ServerDetails(serverID) {
    return await (0, request_1.Request)(`/application/servers/${serverID}`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${config_1.Config.PTEROAPI.KEY}`,
            'Cookie': `pterodactyl_session=${config_1.Config.PTEROAPI.SESSION}`
        }
    });
}
exports.ServerDetails = ServerDetails;
