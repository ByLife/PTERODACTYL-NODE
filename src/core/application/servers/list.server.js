"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerList = void 0;
const config_1 = require("../../../config");
const request_1 = require("../../request");
async function ServerList() {
    return await (0, request_1.Request)('get', "/application/servers", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${config_1.Config.PTEROAPI.KEY}`,
            'Cookie': `pterodactyl_session=${config_1.Config.PTEROAPI.SESSION}`
        }
    });
}
exports.ServerList = ServerList;
