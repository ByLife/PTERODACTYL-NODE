import { headers, Request } from "../../request"
import { ServerDetails } from "./server"

export async function ServerDetails(server_id: number | null): Promise<ServerDetails>
{ 
    return await Request('get',`/application/servers/${server_id}`, headers)
}