import { findUsersByLogin } from './find-user-by-login';
import { usersMock } from '../user-storage/user-list';

test('Find Users by Login', () => {
    jest.mock('../user-storage/user-list', () => usersMock);

    expect(findUsersByLogin('Oleg')).toBe({
        id: 1,
        login: 'Oleg',
        password: '1234',
        age: 24,
        isDeleted: false
    });
});
