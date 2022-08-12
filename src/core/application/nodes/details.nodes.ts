import { headers, Request } from "../../request"
import { NodeConfiguration, NodeDetails } from "./nodes"


async function NodeDetails(nodes_id: number): Promise<NodeDetails> {
    return  Request('get',`/application/nodes/${nodes_id}`, headers)
}

async function NodeConfiguration(nodes_id: number): Promise<NodeConfiguration> {
    return  Request('get',`/application/nodes/${nodes_id}/configuration`, headers)
}

export const nodeDetails = {
    details: NodeDetails,
    configuration: NodeConfiguration,
}


