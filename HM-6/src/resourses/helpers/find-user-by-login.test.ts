import { findUsersByLogin } from './find-user-by-login';

test('adds 1 + 2 to equal 3', () => {
    expect(findUsersByLogin('Oleg')).toBe({
        id: 1,
        login: 'Oleg',
        password: '1234',
        age: 24,
        isDeleted: false
    });
});
