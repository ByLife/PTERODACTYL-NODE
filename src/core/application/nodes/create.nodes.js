"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeCreate = void 0;
const index_1 = require("../../index");
async function NodeCreate(options) {
    return (0, index_1.Request)('post', "/application/nodes", index_1.headers, options);
}
exports.NodeCreate = NodeCreate;
