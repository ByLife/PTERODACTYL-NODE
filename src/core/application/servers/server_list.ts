import { Config } from "../../../config/config"
import { Request } from "../../request/"
import {ServerList} from "./interfaces"

export async function ServerList(): Promise<ServerList<any>> {
    return await Request("/application/servers", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${Config.PTEROAPI.KEY}`,
            'Cookie': `pterodactyl_session=${Config.PTEROAPI.SESSION}`
            }
    })
}