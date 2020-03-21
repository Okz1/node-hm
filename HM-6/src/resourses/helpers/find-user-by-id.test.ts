import { findUserById } from './find-user-by-id';

test('adds 1 + 2 to equal 3', () => {
    expect(findUserById(1)).toBe({
        id: 1,
        login: 'Oleg',
        password: '1234',
        age: 24,
        isDeleted: false
    });
});
