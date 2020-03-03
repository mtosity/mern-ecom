"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const users_model_1 = __importDefault(require("../models/users.model"));
const users = express_1.default.Router();
require("dotenv").config();
users.get("/", (req, res) => {
    // sequelize.sync().then(() =>
    //   User.create({
    //     email: 'req.body.email',
    //     password: 'req.body.password',
    //     firstName: 'req.body.firstName',
    //     lastName: 'req.body.lastName',
    //     roleId: 1
    //   })
    // );
    // res.send("users");
    res.send('sla');
});
users.post("/register", async (req, res) => {
    const today = new Date();
    const user = await users_model_1.default.findOne({
        where: {
            email: req.body.email
        }
    });
    if (user === null) {
        try {
            const hashPass = await bcrypt_1.default.hash(req.body.password, 10);
            const newUser = await users_model_1.default.create({
                email: req.body.email,
                password: hashPass,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                roleId: 1
            });
            res.json({ status: req.body.email + " registered!" });
        }
        catch (err) {
            res.send("error: " + err);
        }
    }
    else {
        res.send('existed user');
    }
});
users.post("/login", (req, res) => {
    users_model_1.default.findOne({
        where: {
            email: req.body.email
        }
    })
        .then(user => {
        if (user) {
            if (bcrypt_1.default.compareSync(req.body.password, user.password)) {
                let token = jsonwebtoken_1.default.sign({ user }, "123");
                res.header('auth-token', token).send(token);
            }
        }
        else {
            res.status(400).json({ error: "User does not exist" });
        }
    })
        .catch(err => {
        res.status(400).json({ error: err });
    });
});
users.get("/profile", (req, res) => {
    const token = req.header('auth-token');
    console.log(token);
    if (token !== undefined) {
        try {
            var decoded = jsonwebtoken_1.default.verify(token, "123");
            res.send(decoded);
        }
        catch (error) {
            res.send(error);
        }
        // User.findOne({
        //   where: {
        //     id: decoded.id
        //   }
        // })
        //   .then(user => {
        //     if (user) {
        //       res.json(user);
        //     } else {
        //       res.send("User does not exist");
        //     }
        //   })
        //   .catch(err => {
        //     res.send("error: " + err);
        //   });
    }
});
exports.default = users;
