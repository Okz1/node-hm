import { Router } from 'express';
import { findUsersByLogin } from '../helpers/find-user-by-login';
import { User } from '../users/model';
import { sign } from "jsonwebtoken";

export const authRouter: Router = Router();

authRouter.get('/', (req, res) => {
    const user: User | undefined = findUsersByLogin(req.body.login);
    if (!user) {
        res.status(404).send({
            error: `User ${req.body.login} not found`,
        });
    } else if (user.login !== req.body.login || user.password !== req.body.password ) {
        res.status(403).send({
            error: `Bad combination of user password / login`,
        });
    } else {
        const payload = { "sub": user.id, "isDeleted": user.isDeleted };
        const token = sign(payload, 'secretKey', { expiresIn: 1000 });
        res.status(200).send({ token })
    }
});
