"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const delete_users_1 = require("./core/application/users/delete.users");
const index_1 = require("./core/index");
(0, index_1.UserCreate)({
    username: "ByLife1561",
    email: "bylife@bylife.fr",
    first_name: "Test1",
    last_name: "Test"
})
    .then(() => (0, index_1.UsersList)().then(e => e.data.data.forEach(e => {
    if (e.attributes.first_name == "Test1") {
        (0, delete_users_1.DeleteUser)(e.attributes.id).then(e => console.log(e));
        console.log(e.attributes.id + " a été supprimé");
    }
})))
    .catch((error) => {
    console.log(error.response.data.errors);
});
