import express, { Application } from 'express';
import { userRouter } from './routers/users/user-router';
import { groupRouter } from './routers/groups/group-router';

const app: Application = express();

app.use(express.json());
app.use('/user', userRouter);
app.use('/group', groupRouter);

app.listen(5000, () => console.log('Server running'));
