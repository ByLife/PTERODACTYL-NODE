import { Config } from "../../../config"
import { headers, Request } from "../../request"
import {ServerList} from "./server"

export async function ServerList(): Promise<ServerList> {
    return await Request('get',"/application/servers", headers)
}