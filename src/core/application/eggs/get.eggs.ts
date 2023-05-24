import { AxiosResponse } from "axios";
import { headers, Request } from "../../";

export async function EggsGet(): Promise<AxiosResponse | undefined> {
    try {
        return Request('patch', "/application/nests", headers)
    }
    catch (error) {
        console.error(error)
    }
}

