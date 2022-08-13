import { Config } from "../../../config"
import { headers, Request } from "../../request"
import { UsersList } from "./users"

export async function UsersList(id?: number): Promise<UsersList> {
    var PATH = ""
    if(id != undefined) PATH = "/" + id
    return await Request('get',`/application/users${PATH}`, headers)
}