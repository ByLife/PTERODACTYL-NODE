"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nodes = void 0;
const create_nodes_1 = require("./create.nodes");
const details_nodes_1 = require("./details.nodes");
const list_nodes_1 = require("./list.nodes");
exports.nodes = {
    detail: details_nodes_1.nodeDetails,
    list: list_nodes_1.NodesList,
    create: create_nodes_1.NodeCreate
};
