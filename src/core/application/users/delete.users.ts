import { AxiosResponse } from "axios";
import { headers, Request } from "../../index";

export async function UsersDelete(user_id: number): Promise<number | undefined> {
    try {
        const response = await Request('delete', `/application/users/${user_id}`, headers)
        return response.status
    } catch (error) {
        console.error(error)
    }
}
