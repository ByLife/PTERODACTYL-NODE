import { AxiosResponse } from "axios";
import { headers, Request } from "../../";
import { ListReponse } from "./list.interface";

export async function EggsList(): Promise<ListReponse | AxiosResponse | undefined> {
    try {
        return (await Request('get', "/application/nests", headers)).data
    }
    catch (error) {
        console.error(error)
    }
}

