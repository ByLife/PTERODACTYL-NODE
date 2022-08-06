import { ServerDetails } from "./server_details";
import { ServerList } from "./server_list";

export var server = {
    get: {
        serverList: ServerList(),
        serverDetails: ServerDetails,
    },
} 