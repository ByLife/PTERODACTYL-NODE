export class PTERO {
    static URI: string = ""
    static API_KEY: string = ""
    static SESSION: string = ""
}

import { nodes, server, users } from "./application"

export * from "./request"
export * from "./application"

export class Client {
    static nodes = nodes
    static servers = server
    static users = users
}

