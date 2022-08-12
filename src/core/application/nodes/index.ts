import { NodeCreate } from "./create.nodes"
import { nodeDetails } from "./details.nodes"
import { NodesList } from "./list.nodes"

export var nodes = {
    detail: nodeDetails,
    list: NodesList,
    create: NodeCreate
}