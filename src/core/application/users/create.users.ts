import { AxiosResponse } from "axios";
import { headers, Request } from "../../index";
import { UserCreate } from "./users";

export async function UsersCreate(options: UserCreate): Promise<AxiosResponse> {
    return Request('post', "/application/users", headers, options)
}

