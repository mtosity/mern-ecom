"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const product_model_1 = __importDefault(require("../models/product.model"));
const uuidv4_1 = require("uuidv4");
const ProductRoute = express_1.default.Router();
require("dotenv").config();
ProductRoute.get("/sync", async (req, res) => {
    await product_model_1.default.sync();
    res.json({ msg: "Table synced" });
});
ProductRoute.get("/sync/force", async (req, res) => {
    await product_model_1.default.sync({ force: true });
    res.json({ msg: "Table synced" });
});
ProductRoute.put("/", async (req, res) => {
    const { title, description, quantity, image, originPrice, salePrice, categoryID, gender } = req.body;
    try {
        await product_model_1.default.create({
            id: uuidv4_1.uuid(),
            title,
            description,
            quantity,
            image,
            originPrice,
            salePrice,
            categoryID,
            gender
        });
        res.status(200).json({ msg: "Added successful" });
    }
    catch (error) {
        res.status(400).json(error);
    }
});
ProductRoute.get("/", async (req, res) => {
    try {
        const products = await product_model_1.default.findAll();
        res.json(products);
    }
    catch (error) {
        res.status(400).json(error);
    }
});
ProductRoute.delete("/truncate", async (req, res) => {
    try {
        await product_model_1.default.destroy({ truncate: true });
        res.json({ msg: "Table truncated" });
    }
    catch (error) {
        res.status(400).json(error);
    }
});
ProductRoute.delete("/", async (req, res) => {
    const { id } = req.body;
    try {
        await product_model_1.default.destroy({ where: {
                id: id
            } });
        res.status(200).json({ msg: "Deleted successful" });
    }
    catch (error) {
        res.status(400).json(error);
    }
});
exports.default = ProductRoute;
