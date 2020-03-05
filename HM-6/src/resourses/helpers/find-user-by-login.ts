import { User } from '../users/model';
import { USERS } from '../user-storage/user-list';

export const findUsersByLogin = (str: string): User | undefined => {
    return USERS.find((user: User) => user.login.toLowerCase() === str.toLowerCase());
};

