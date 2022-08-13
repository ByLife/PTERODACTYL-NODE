import { AxiosResponse } from "axios";
import { headers, Request } from "../../index";
import { UserPatch } from "./users";

export async function UsersUpdate(options: UserPatch): Promise<AxiosResponse> {
    return Request('patch', "/application/users", headers, options)
}

