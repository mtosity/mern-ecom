"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const category_model_1 = __importDefault(require("../models/category.model"));
const uuidv4_1 = require("uuidv4");
const CategoryRoute = express_1.default.Router();
require("dotenv").config();
CategoryRoute.get("/sync/force", async (req, res) => {
    await category_model_1.default.sync({ force: true });
    res.json({ msg: "Table synced" });
});
CategoryRoute.get("/sync", async (req, res) => {
    await category_model_1.default.sync();
    res.json({ msg: "Table synced" });
});
CategoryRoute.delete("/truncate", async (req, res) => {
    try {
        await category_model_1.default.destroy({ truncate: true });
        res.status(200).json({ msg: "Table truncated" });
    }
    catch (error) {
        res.status(400).json(error);
    }
});
CategoryRoute.put("/", async (req, res) => {
    const { name } = req.body;
    try {
        const existedCate = await category_model_1.default.findOne({ where: { name: name } });
        if (existedCate === null) {
            await category_model_1.default.create({
                id: uuidv4_1.uuid(),
                name: name
            });
            res.status(200).json({ msg: "Added successful" });
        }
        else {
            res.status(400).json({ errors: [{ message: 'Existed category' }] });
        }
    }
    catch (error) {
        res.status(400).json(error);
    }
});
CategoryRoute.delete("/", async (req, res) => {
    const { id } = req.body;
    try {
        await category_model_1.default.destroy({ where: {
                id: id
            } });
        res.status(200).json({ msg: "Deleted successful" });
    }
    catch (error) {
        res.status(400).json(error);
    }
});
// CategoryRoute.delete("/sync", async (req, res) => {
//   await Product.sync();
//   res.json({ msg: "Table synced" });
// });
CategoryRoute.get("/", async (req, res) => {
    const categories = await category_model_1.default.findAll();
    res.json(categories);
});
exports.default = CategoryRoute;
