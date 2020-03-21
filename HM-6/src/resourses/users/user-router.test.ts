import { app } from '../../index';
import { USERS } from '../user-storage/user-list';
import { findUsersByStr } from '../helpers/find-users-by-str';
const request = require('supertest');

describe('USer Endpoints', () => {
    it('should return user', async () => {
        const res = await request(app).get('/user/1');

        expect(res.statusCode).toEqual(200);
        expect(res.body).toBe({
            id: 1,
            login: 'Oleg',
            password: '1234',
            age: 24,
            isDeleted: false
        },);
    });

    it('should return error', async () => {
        const res = await request(app).get('/user/121');

        expect(res.statusCode).toEqual(404);
        expect(res.body).toBe('User with id 121 not found');
    });

    it('should create user', async () => {
        const user = {
            login: 'Vasya1',
            password: '12345',
            age: 25
        };
        const res = await request(app).post('/user').send(user);

        expect(res.statusCode).toBe(201);
        expect(res.body).toBe(USERS.push({ ...user, id: USERS.length, isDeleted: false }));
    });

    it('should update user', async () => {
        const newUser = {
            login: 'Vasya1',
            password: '12345',
            age: 25
        };
        const res = await request(app).put('/user/1').send(newUser);

        expect(res.statusCode).toBe(200);
        expect(res.body).toBe(USERS.map(user => {
            if (user.id === 1) {
                return user;
            }
        }));
    });

    it('should delete user', async () => {
        const res = await request(app).delete('/user/1');

        expect(res.statusCode).toBe(200);
        expect(res.body).toBe(USERS.map(user => {
            if (user.id === 1) {
                return { ...user, isDeleted: true };
            }
        }));
    });

    it('should get user by query substring', async () => {
        const res = await request(app).delete('/users?loginSubstring=Oleg');

        expect(res.statusCode).toBe(200);
        expect(res.body).toBe(findUsersByStr('Oleg'));
    });
});
