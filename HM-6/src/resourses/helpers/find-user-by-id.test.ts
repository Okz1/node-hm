import { findUserById } from './find-user-by-id';
import { usersMock } from '../user-storage/user-list';

test('Find users by id', () => {
    jest.mock('../user-storage/user-list', () => usersMock);

    expect(findUserById(1)).toBe({
        id: 1,
        login: 'Oleg',
        password: '1234',
        age: 24,
        isDeleted: false
    });
});
