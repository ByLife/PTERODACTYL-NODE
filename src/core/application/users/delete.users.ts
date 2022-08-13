import { AxiosResponse } from "axios";
import { headers, Request } from "../../index";

export async function UsersDelete(user_id: number): Promise<number> {
    return (await Request('delete', `/application/users/${user_id}`, headers)).status
}
