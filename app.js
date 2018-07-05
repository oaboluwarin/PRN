import express, { json, urlencoded } from 'express';
import morgan from 'morgan';

const app = express();

app.use(json());
app.use(urlencoded({ extended: false }));
app.use(morgan('tiny'));

app.get('/', (req, res) => res.send({ message: 'Welcome! All raring to go.' }));

export default app;
