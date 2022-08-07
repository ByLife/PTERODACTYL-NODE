import { AxiosResponse } from "axios"
import { Config } from "../../../config/config"
import { Request } from "../../request/index"
import { NodesList } from "./nodes"

export async function NodesList(): Promise<NodesList>
{ 
    return await Request('get',`/application/nodes`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${Config.PTEROAPI.KEY}`,
            'Cookie': `pterodactyl_session=${Config.PTEROAPI.SESSION}`
            }
    })
}