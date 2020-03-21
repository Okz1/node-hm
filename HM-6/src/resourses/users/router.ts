import { Router } from 'express';
import { USERS } from '../user-storage/user-list';
import { User } from './model';
import { mutateUser } from '../helpers/mutate-user';
import { findUserById } from '../helpers/find-user-by-id';
import { userValidator, userSchema } from './Schema';
import { findUsersByStr } from '../helpers/find-users-by-str';
import { winstonLogger } from '../helpers/winston-logger';

export const userRouter: Router = Router();

userRouter.get('/user/:id', (req, res) => {
    const userID = +req.params.id;
    const currentUser = findUserById(userID);
    if (!currentUser) {
        winstonLogger(`User with id ${ userID } not found`, 404, userID);
        res.status(404).send(`User with id ${userID} not found`);
    }
    res.status(200).json(currentUser);
});

userRouter.post('/user', userValidator.body(userSchema), (req, res) => {
    const user: User = { id: USERS.length, isDeleted: false, ...req.body };
    USERS.push(user);
    res.status(201).send(USERS);
});

userRouter.put('/user/:id', (req, res) => {
    const userID = +req.params.id;
    if (findUserById(userID)) {
        mutateUser(userID, { ...req.body });
        res.status(200).send(USERS);
    }
    winstonLogger(`User with id ${ userID } not found`, 404, userID);
    res.status(404).send(`User with id ${ userID } not found`);
});

userRouter.delete('/user/:id', (req, res) => {
    const userID = +req.params.id;
    if (!findUserById(userID)) {
        winstonLogger(`User with id ${ userID } not found`, 404, userID);
        res.status(404).send(`User with id ${ userID } not found`);
    } else {
        mutateUser(userID, { isDeleted: true });
        res.status(200).send(USERS);
    }
});

userRouter.get('/users', (req, res) => {
    const queries = req.query;
    const users = findUsersByStr(queries['loginSubstring']);
    if (users.length) {
        res.json(users.slice(0, queries.limit));
    } else {
        winstonLogger(`Users with substring ${ queries['loginSubstring'] } not found`, 404, queries['loginSubstring']);
        res.status(404).send(`Users with substring ${ queries['loginSubstring'] } not found`);
    }
});
