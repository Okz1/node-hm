import { Router } from 'express';
import { USERS } from './user-list';
import { User } from './model';
import { mutateUser } from '../helpers/mutate-user';
import { findUser } from '../helpers/find-user';
import { userValidator, userSchema } from './UserSchema';

export const userRouter: Router = Router();

userRouter.get('/user/:id', (req, res) => {
    const userID = +req.params.id;
    const currentUser = findUser(userID);
    if (!currentUser) {
        res.status(404).send(`User with id ${userID} not found`);
    }
    res.json(currentUser);
});

userRouter.post('/user', userValidator.body(userSchema), (req, res) => {
    const user: User = { id: USERS.length, isDeleted: false, ...req.body };
    USERS.push(user);
    res.status(201).send(USERS);
});

userRouter.put('/user/:id', (req, res) => {
    mutateUser(+req.params.id, { ...req.body });
    res.status(200).send(USERS);
});

userRouter.delete('/user/:id', (req, res) => {
    const userID = +req.params.id;
    const currentUser = findUser(userID);
    if (!currentUser) {
        res.status(404).send(`User with id ${userID} not found`);
    } else {
        mutateUser(userID, { isDeleted: true });
        res.status(200).send(USERS);
    }
});

