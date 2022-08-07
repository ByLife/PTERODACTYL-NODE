import { Config } from "../../../config/config"
import { Request } from "../../request/index"
import { ServerDetails } from "./server"

export async function ServerDetails(server_id: number | null): Promise<ServerDetails>
{ 
    return await Request('get',`/application/servers/${server_id}`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${Config.PTEROAPI.KEY}`,
            'Cookie': `pterodactyl_session=${Config.PTEROAPI.SESSION}`
            }
    })
}