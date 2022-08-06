import { Config } from "../../../config"
import { Request } from "../../request"
import {ServerList} from "./server"

export async function ServerList(): Promise<ServerList<any>> {
    return await Request('get',"/application/servers", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${Config.PTEROAPI.KEY}`,
            'Cookie': `pterodactyl_session=${Config.PTEROAPI.SESSION}`
            }
    })
}