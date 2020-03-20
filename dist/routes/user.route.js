"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const user_model_1 = __importDefault(require("../models/user.model"));
const ErrorType_1 = require("../utils/ErrorType");
const UserRoute = express_1.default.Router();
require("dotenv").config();
UserRoute.get("/sync", (req, res) => {
    user_model_1.default.sync();
    res.json({ sa: "sla" });
});
UserRoute.get("/sync/force", (req, res) => {
    user_model_1.default.sync({ force: true });
    res.json({ sa: "sla" });
});
UserRoute.put("/", async (req, res) => {
    const user = await user_model_1.default.findOne({
        where: {
            email: req.body.email
        }
    });
    if (!user) {
        try {
            const { email, password, name, address, role } = req.body;
            const hashPass = await bcrypt_1.default.hash(password, 10);
            await user_model_1.default.create({
                email: email,
                password: hashPass,
                name: name,
                address: address,
                role: role
            });
            res.status(200).json({ msg: "user signned up" });
        }
        catch (err) {
            res.status(400).json(err);
        }
    }
    else {
        res
            .status(400)
            .json({
            name: "UserRouteignUpError",
            errors: [{ message: ErrorType_1.SignUpError.UserExisted, path: "email" }]
        });
    }
});
UserRoute.get("/", async (req, res) => {
    const products = await user_model_1.default.findAll();
    res.json(products);
});
UserRoute.delete("/truncate", async (req, res) => {
    try {
        await user_model_1.default.destroy({ truncate: true });
        res.json({ msg: "Table truncated" });
    }
    catch (error) {
        res.status(400).json(error);
    }
});
UserRoute.delete("/", async (req, res) => {
    const { id } = req.body;
    try {
        await user_model_1.default.destroy({ where: {
                id: id
            } });
        res.status(200).json({ msg: "Deleted successful" });
    }
    catch (error) {
        res.status(400).json(error);
    }
});
UserRoute.post("/signup", async (req, res) => {
    const user = await user_model_1.default.findOne({
        where: {
            email: req.body.email
        }
    });
    if (!user) {
        try {
            const { email, password, name, address, role } = req.body;
            const hashPass = await bcrypt_1.default.hash(password, 10);
            await user_model_1.default.create({
                email: email,
                password: hashPass,
                name: name,
                address: address,
                role: role
            });
            res.status(200).json({ status: "user signned up" });
        }
        catch (err) {
            res.status(400).json(err);
        }
    }
    else {
        res
            .status(400)
            .json({
            name: "UserRouteignUpError",
            errors: [{ message: ErrorType_1.SignUpError.UserExisted, path: "email" }]
        });
    }
});
UserRoute.post("/login", (req, res) => {
    user_model_1.default.findOne({
        where: {
            email: req.body.email
        }
    })
        .then(user => {
        if (user) {
            if (bcrypt_1.default.compareSync(req.body.password, user.password)) {
                res.status(200).json(user);
            }
            else {
                res
                    .status(400)
                    .json({
                    name: "UserLoginError",
                    errors: [{ message: ErrorType_1.LoginError.WrongPass, path: "password" }]
                });
            }
        }
        else {
            res
                .status(400)
                .json({
                name: "UserLoginError",
                errors: [{ message: ErrorType_1.LoginError.UserNotExisted, path: "email" }]
            });
        }
    })
        .catch(err => {
        res.status(400).json(err);
    });
});
exports.default = UserRoute;
