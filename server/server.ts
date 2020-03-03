import express, {Response, Request} from 'express';
import bodyParsers from 'body-parser';
import cors from 'cors';

import sequelize from './config/sequelize';

import user from './routes/user.route'
require('dotenv').config()

const app = express();
app.use(cors());
app.use(bodyParsers());
// app.use(express.json());

app.get('/api', (req: Request, res: Response) => {
    res.json({hello: 'hello'})
})

app.get('/register', (req: Request, res: Response) => {
    res.redirect('/')
})

app.use('/users', user);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(port))
sequelize.authenticate().then(() => console.log('db connected'))