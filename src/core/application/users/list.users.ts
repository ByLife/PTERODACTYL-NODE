import { headers, Request } from "../../request"
import { UsersList, UsersListData } from "./users"

export async function UsersList(id?: number): Promise<UsersListData | undefined> {
    try {
        var PATH = ""
        if(id != undefined) PATH = "/" + id
        const response = await Request('get', `/application/users${PATH}`, headers)
        return response.data
    } catch (error) {
        console.error(error)
    }
}