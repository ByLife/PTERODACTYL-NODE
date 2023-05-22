import { nodes, server, users } from "./application"

export * from "./request"
export * from "./application"


export class client {
    static servers = server
    static nodes = nodes
    static users = users

    static URI: string = ""
    static KEY: string = ""
    static SESSION: string = ""
}