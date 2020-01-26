import express, { Application } from 'express';
import { userRouter } from './routers/users/user-router';

const app: Application = express();

app.use(express.json());
app.use('/', userRouter);

app.listen(5000, () => console.log('Server running'));
