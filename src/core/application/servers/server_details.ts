import { AxiosResponse } from "axios"
import { Config } from "../../../config/config"
import { Request } from "../../request"
import {} from "./interfaces.d"

export async function ServerDetails(serverID: number | null): Promise<AxiosResponse>
{ 
    return await Request(`/application/servers/${serverID}`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${Config.PTEROAPI.KEY}`,
            'Cookie': `pterodactyl_session=${Config.PTEROAPI.SESSION}`
            }
    })
}