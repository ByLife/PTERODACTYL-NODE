import PTERO from "./src"
import { Client } from "./src/core"

async function main() { 
    try {
        const servers = await Client.servers.get.serverList
        if(!servers) return console.log("No servers found")
        servers.data.forEach(server => {
            console.log(server.attributes.name)
        })

        const clients = await Client.users.get.list

        if(!clients) return console.log("No clients found")

        clients.data.forEach(client => {
            console.log(client.attributes.username, " ", client.attributes.email, " ", client.attributes.first_name, " ", client.attributes.last_name)
        })
    } catch (error) {
        console.log(error)
    }
}
main()