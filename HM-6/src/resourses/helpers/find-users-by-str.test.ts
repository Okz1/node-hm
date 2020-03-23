import { findUsersByStr } from './find-users-by-str';
import { usersMock } from '../user-storage/user-list';

test('Find users by str', () => {
    jest.mock('../user-storage/user-list', () => usersMock);

    expect(findUsersByStr('Oleg')).toBe([{
        id: 1,
        login: 'Oleg',
        password: '1234',
        age: 24,
        isDeleted: false
    }]);
});
