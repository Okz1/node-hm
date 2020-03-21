import { findUsersByStr } from './find-users-by-str';

test('adds 1 + 2 to equal 3', () => {
    expect(findUsersByStr('Oleg')).toBe([{
        id: 1,
        login: 'Oleg',
        password: '1234',
        age: 24,
        isDeleted: false
    }]);
});
