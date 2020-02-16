import { User } from '../users/model';

export const USERS: User[] = [
    {
        id: 0,
        login: 'Max',
        password: '123',
        age: 23,
        isDeleted: false
    },
    {
        id: 1,
        login: 'Oleg',
        password: '1235',
        age: 24,
        isDeleted: false
    },
    {
        id: 2,
        login: 'Vasya',
        password: '1234',
        age: 25,
        isDeleted: true
    }
];
