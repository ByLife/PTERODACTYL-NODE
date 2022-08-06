"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const server_details_1 = require("./server_details");
const server_list_1 = require("./server_list");
exports.Client = {
    get: {
        serverList: (0, server_list_1.ServerList)(),
        serverDetails: server_details_1.ServerDetails,
    },
};
