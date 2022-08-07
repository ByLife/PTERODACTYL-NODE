"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("./core");
core_1.nodes.nodesList().then(e => console.log(e.data.data[0].attributes.id));
core_1.nodes.nodeDetail.details(4).then(e => {
    console.log(e);
});
