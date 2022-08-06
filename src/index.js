"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./core/application/index");
index_1.Client.get.serverList.then(serverListData => index_1.Client.get.serverDetails(serverListData.data.data[0].attributes.id).then(e => console.log(e)));
