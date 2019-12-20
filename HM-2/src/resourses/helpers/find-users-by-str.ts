import { User } from '../users/model';
import { USERS } from '../user-storage/user-list';

export const findUsersByStr = (str: string): User[] | [] => {
    return USERS.filter((user: User) => user.login.toLowerCase().includes(str.toLowerCase()));
};

