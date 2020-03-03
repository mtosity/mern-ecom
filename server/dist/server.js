"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const sequelize_1 = __importDefault(require("./config/sequelize"));
const users_route_1 = __importDefault(require("./routes/users.route"));
require('dotenv').config();
const app = express_1.default();
app.use(cors_1.default());
app.use(body_parser_1.default());
// app.use(express.json());
app.get('/', (req, res) => {
    res.send('Hello');
});
app.get('/register', (req, res) => {
    res.redirect('/');
});
app.use('/users', users_route_1.default);
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(port));
sequelize_1.default.authenticate().then(() => console.log('db connected'));
