import {server} from "./core/application/index"

server.get.serverList.then(serverListData => 
    server.get.serverDetails(serverListData.data.data[0].attributes.id).then(e =>
        console.log(e)
    )
)