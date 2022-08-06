import { ServerDetails } from "./details.server";
import { ServerList } from "./list.server";

export var server = {
    get: {
        serverList: ServerList(),
        serverDetails: ServerDetails,
    },
} 