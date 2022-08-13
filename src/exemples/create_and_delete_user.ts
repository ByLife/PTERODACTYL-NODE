import { client } from "../core"





client.users.create({                               // Creating the variable using the UserCreate interface and sending it to the API
    username: "ByLife1561",
    email: "bylife@bylife.fr",
    first_name: "Test1",
    last_name: "Test"

})
.then(                                      // Response interpretation
    () =>
        client.users.get.list.then(     
            e => e.data.data.forEach(e =>
                { 
                    if(e.attributes.first_name == "Test1"){ // Looking the first name
                        client.users.delete(e.attributes.id).then(e => console.log(e))   // Logging HTTP STATUS CODE (No condition add if you want to)
                        console.log(e.attributes.id + " a été supprimé")        // Logging if successfull ID of the user deleted
                    }
                }
            )
        )
)
.catch((error) => {                         // Error handler
    console.log(error.response.data.errors)
})