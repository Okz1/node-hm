import { User } from '../users/model';
import { USERS } from '../users/user-list';

export  function findUser(id: number): User | undefined {
    return USERS.find((user: User) => user.id === id);
}

