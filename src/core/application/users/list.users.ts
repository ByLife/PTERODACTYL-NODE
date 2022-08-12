import { Config } from "../../../config"
import { headers, Request } from "../../request"
import { UsersList } from "./users"

export async function UsersList(): Promise<UsersList> {
    return await Request('get',"/application/users", headers)
}