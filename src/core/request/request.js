"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Request = void 0;
const axios_1 = __importDefault(require("axios"));
const config_1 = require("../../config/config");
const Request = (PATH, CONFIG) => {
    return axios_1.default.get(config_1.Config.PTEROAPI.URL + PATH, CONFIG);
};
exports.Request = Request;
