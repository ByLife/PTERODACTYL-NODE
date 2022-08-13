import { AxiosResponse } from "axios";
import { headers, Request } from "../../index";
import { UserCreate } from "./users";

export async function UsersCreate(options: UserCreate): Promise<number> {
    return (await Request('post', "/application/users", headers, options)).status
}

