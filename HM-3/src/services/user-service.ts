import { query } from '../data-access/db';
import { User } from '../routers/users/User';

export class UserService {
    getAllUsers() {
        return query('SELECT * FROM "public"."users" LIMIT 100').then((res: any) => res.rows);
    }

    getUserById(id: string) {
        return query(`SELECT * FROM "public"."users" WHERE id = ${id};`).then((res: any) => res.rows);
    }

    createUser(user: User) {
        return query(`INSERT INTO Users (id,login,password,age,isDeleted) VALUES (${user.id}, '${user.login}', '${user.password}', ${user.age}, false);`)
            .then((res: any) => res.rows);
    }

    updateUser(id: string, user: User) {
        return query(`UPDATE Users SET login = '${user.login}', password = '${user.password}', age = ${user.age} WHERE id = ${id};`).then((res: any) => res.rows);
    }

    delateUser(id: string) {
        return query(`UPDATE Users SET isDeleted = true WHERE id = ${id};`).then((res: any) => res.rows);
    }

    findUserBySubString(substring: string) {
        return query(`SELECT * FROM "public"."users" WHERE login LIKE '%${substring}%'`).then((res: any) => res.rows);
    }
}
