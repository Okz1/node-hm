import express, { Application } from 'express';
import { userRouter } from './resourses/users/router';
import { appLogger } from './resourses/helpers/winston-logger';
import { authRouter } from './resourses/auth/router';
import { checkToken } from './resourses/helpers/check-token';
const cors = require('cors');
const app: Application = express();

app.use(express.json());
app.use(cors());

app.use((err: any, req: any, res:any, next: any) => {
    if (err) {
        res.status(500).send('Internal Server Error');
    }
    console.log(req);
    next();
});
app.use(appLogger);
app.use('/auth', authRouter);
app.use('/', checkToken, userRouter);

process.on('uncaughtException', (error) => {
    console.log(error);
});

app.listen(5010, () => console.log('Server running'));
