import { AxiosResponse } from "axios";
import { headers, Request } from "../../index";
import { UserCreate } from "./users";

export async function UsersCreate(options: UserCreate): Promise<any | undefined> {
    try {
        const response = await Request('post', "/application/users", headers, options)
        return response.data
    }
    catch (error) {
        console.error(error)
    }
}

