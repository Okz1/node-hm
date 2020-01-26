import { Router } from 'express';
import { UserService } from '../../services/user-service';

export const userRouter: Router = Router();
const userService: UserService = new UserService();

userRouter.get('/user', async (req, res) => {
    try {
        const users =  await userService.getAllUsers();
        res.json({ users });
    } catch (e) {
        res.status(500).send(e);
    }
});

userRouter.get('/user/:id', async (req, res) => {
    const userID = req.params.id;
    const user = await userService.getUserById(userID);
    if (!user.length) {
        res.status(404).send(`User with id ${userID} not found`);
    }
    res.json(user);
});

userRouter.post('/user', async (req, res) => {
    try {
        await userService.createUser(req.body);
    } catch (e) {
        res.status(500).send(e);
    }
    res.status(201).send(req.body);
});

userRouter.put('/user/:id', async (req, res) => {
    const userID = req.params.id;
    try {
        await userService.updateUser(userID, req.body);
        res.status(200).send(req.body);
    } catch (e) {
        res.status(500).send(e);
    }
});

userRouter.delete('/user/:id', async (req, res) => {
    const userID = req.params.id;
    try {
        await userService.delateUser(userID);
        res.status(200).send(req.body);
    } catch (e) {
        res.status(500).send(e);
    }
});

userRouter.get('/users',  async (req, res) => {
    const queries = req.query;
    try {
        const foundedUser =  await userService.findUserBySubString(queries['loginSubstring']);
        res.status(200).send(foundedUser);
    } catch (e) {
        res.status(500).send(e);
    }
});
