import { AxiosResponse } from "axios";
import { headers, Request } from "../../index";
import { NodeCreateData } from "./nodes";

export async function NodeCreate(options: NodeCreateData): Promise<AxiosResponse> {
    return Request('post', "/application/nodes", headers, options)
}

