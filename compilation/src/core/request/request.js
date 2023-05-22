"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.headers = exports.Request = void 0;
const axios_1 = __importDefault(require("axios"));
const __1 = __importDefault(require("../../.."));
const Request = (REQUESTTYPE, PATH, CONFIG, DATA) => {
    switch (REQUESTTYPE) {
        case "post":
            return axios_1.default.post(__1.default.URI + PATH, DATA, CONFIG);
        case "get":
            return axios_1.default.get(__1.default.URI + PATH, CONFIG);
        case "patch":
            return axios_1.default.patch(__1.default.URI + PATH, DATA, CONFIG);
        case "delete":
            return axios_1.default.delete(__1.default.URI + PATH, CONFIG);
        case "put":
            return axios_1.default.put(__1.default.URI + PATH, DATA, CONFIG);
    }
};
exports.Request = Request;
exports.headers = {
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${__1.default.API_KEY}`,
        'Cookie': `pterodactyl_session=${__1.default.SESSION}`
    }
};
