import express, { json, urlencoded } from 'express';
import morgan from 'morgan';
import { userRouter, todoRouter } from './routes';

const app = express();

app.use(json());
app.use(urlencoded({ extended: false }));
app.use(morgan('dev'));

app.use('/user', userRouter);
app.use('/todo', todoRouter);


export default app;
