
import {nodes} from "./core"

nodes.nodesList().then(e => console.log(e.data.data[0].attributes.id))

nodes.nodeDetail.details(4).then(e => {
    console.log(e)
})