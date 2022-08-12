import { headers, Request } from "../../request"
import { NodesList } from "./nodes"

export async function NodesList(): Promise<NodesList>
{ 
    return await Request('get',`/application/nodes`, headers)
}