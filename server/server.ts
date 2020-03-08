import express, {Response, Request} from 'express';
import bodyParsers from 'body-parser';
import cors from 'cors';

import sequelize from './config/sequelize';

import UserRoute from './routes/user.route'
import ProductRoute from './routes/product.route';
import CategoryRoute from './routes/category.route';
require('dotenv').config()

const app = express();
app.use(cors());
app.use(bodyParsers());

app.get('/register', (req: Request, res: Response) => {
    res.redirect('/')
})

const api = express.Router();
api.use('/user', UserRoute);
api.use('/product', ProductRoute);
api.use('/category', CategoryRoute);

app.use('/api', api);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(port))
sequelize.authenticate().then(() => console.log('db connected'))