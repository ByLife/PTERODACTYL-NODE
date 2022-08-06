import { Config } from "../../../config/config"
import { Request } from "../../request/index"
import { ServerDetails } from "./server"

export async function ServerDetails(serverID: number | null): Promise<ServerDetails>
{ 
    return await Request('get',`/application/servers/${serverID}`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${Config.PTEROAPI.KEY}`,
            'Cookie': `pterodactyl_session=${Config.PTEROAPI.SESSION}`
            }
    })
}