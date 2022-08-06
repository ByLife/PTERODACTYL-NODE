"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
const details_server_1 = require("./details.server");
const list_server_1 = require("./list.server");
exports.server = {
    get: {
        serverList: (0, list_server_1.ServerList)(),
        serverDetails: details_server_1.ServerDetails,
    },
};
