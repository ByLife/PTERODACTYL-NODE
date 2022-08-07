"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Request = void 0;
const axios_1 = __importDefault(require("axios"));
const config_1 = require("../../config/config");
const Request = (REQUESTTYPE, PATH, CONFIG) => {
    switch (REQUESTTYPE) {
        case "post":
            return axios_1.default.post(config_1.Config.PTEROAPI.URL + PATH, CONFIG);
        case "get":
            return axios_1.default.get(config_1.Config.PTEROAPI.URL + PATH, CONFIG);
        case "patch":
            return axios_1.default.patch(config_1.Config.PTEROAPI.URL + PATH, CONFIG);
        case "delete":
            return axios_1.default.delete(config_1.Config.PTEROAPI.URL + PATH, CONFIG);
        case "put":
            return axios_1.default.put(config_1.Config.PTEROAPI.URL + PATH, CONFIG);
    }
};
exports.Request = Request;
