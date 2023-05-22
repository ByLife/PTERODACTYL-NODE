import { AxiosResponse } from "axios";
import { headers, Request } from "../../index";
import { UserPatch } from "./users";

export async function UsersUpdate(options: UserPatch): Promise<AxiosResponse | undefined> {
    try {
        return Request('patch', "/application/users", headers, options)
    }
    catch (error) {
        console.error(error)
    }
}

