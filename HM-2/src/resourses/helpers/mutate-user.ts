import { USERS } from '../user-storage/user-list';
import { User } from '../users/model';

export function mutateUser(id: number, data: { [key: string]: any }): void {
    const userIndex = USERS.findIndex((user: User) => user.id === id);
    const foundedUser = USERS.find((user: User) => user.id === id);
    const newData = Object.assign({}, foundedUser, data);
    USERS.splice(userIndex, 1, newData);
}
