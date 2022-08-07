import { AxiosResponse } from "axios"
import { Config } from "../../../config"
import { Request } from "../../request"
import { NodeDetails } from "./nodes"


async function NodeDetails(nodes_id: number): Promise<NodeDetails> {
    return  Request('get',`/application/nodes/${nodes_id}`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${Config.PTEROAPI.KEY}`,
            'Cookie': `pterodactyl_session=${Config.PTEROAPI.SESSION}`
            }
    })
}

async function NodeConfiguration(nodes_id: number): Promise<NodeDetails> {
    return  Request('get',`/application/nodes/${nodes_id}/configuration`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${Config.PTEROAPI.KEY}`,
            'Cookie': `pterodactyl_session=${Config.PTEROAPI.SESSION}`
            }
    })
}

export const nodeDetails = {
    details: NodeDetails,
    configuration: NodeConfiguration,
}


