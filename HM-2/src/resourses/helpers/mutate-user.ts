import { USERS } from "../users/user-list";
import { User } from "../users/model";

export function mutateUser(id: number, data: { [key: string]: any }) {
    const userIndex = USERS.findIndex((user: User) => user.id === id);
    const user = USERS.find((user: User) => user.id === id) as User;
    USERS.splice(userIndex, 1, { ...user, ...data });
}
