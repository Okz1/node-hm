import express, { Application } from 'express';
import { userRouter } from './resourses/users/router';
import { appLogger, winstonLogger } from './resourses/helpers/winston-logger';

const app: Application = express();

app.use(express.json());
app.use((err: any, req: any, res:any, next: any) => {
    if (err) {
        res.status(500).send('Internal Server Error');
    }
    console.log(req);
    next();
});
app.use(appLogger);
app.use('/', userRouter);

process.on('uncaughtException', (error) => {
    console.log(error);
});

app.listen(5000, () => console.log('Server running'));
