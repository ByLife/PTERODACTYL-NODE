import { UsersCreate } from "./create.users"
import { UsersDelete } from "./delete.users"
import { UsersList } from "./list.users"
import { UsersUpdate } from "./update.users"

export * from "./users"

export var users = {
    get: {
        list: UsersList(),
        user: UsersList
    },
    delete: UsersDelete,
    create: UsersCreate,
    update: UsersUpdate,
}