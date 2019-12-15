import express, { Application } from 'express';
import { userRouter } from "./resourses/users/user-router";

const app: Application = express();

app.use(express.json());
app.use('/', userRouter);
app.listen(5000, () => console.log('Server running'));
