"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.users = void 0;
const create_users_1 = require("./create.users");
const delete_users_1 = require("./delete.users");
const list_users_1 = require("./list.users");
const update_users_1 = require("./update.users");
__exportStar(require("./users"), exports);
exports.users = {
    get: {
        list: (0, list_users_1.UsersList)(),
        user: list_users_1.UsersList
    },
    delete: delete_users_1.UsersDelete,
    create: create_users_1.UsersCreate,
    update: update_users_1.UsersUpdate,
};
