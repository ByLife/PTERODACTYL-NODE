import { headers, Request } from "../../request"
import {ServerList, ServerListData} from "./server"

export async function ServerList(): Promise<ServerListData | undefined> {
    try {
        const response = await Request('get', '/application/servers', headers)
        return response.data
    } catch (error) {
        console.log(error)
    }
}