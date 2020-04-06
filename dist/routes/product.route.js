"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const uuidv4_1 = require("uuidv4");
const express_1 = __importDefault(require("express"));
const product_model_1 = __importDefault(require("../models/product.model"));
const sequelize_1 = require("sequelize");
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
ProductRoute.post("/", async (req, res) => {
    const { title, description, quantity, image, originPrice, salePrice, categoryID, gender } = req.body;
    console.log(req.body);
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
    const query = req.query.q || "";
    try {
        const products = await product_model_1.default.findAll({
            where: {
                title: {
                    [sequelize_1.Op.like]: [`%${query}%`]
                }
            }
        });
        res.json(products);
    }
    catch (error) {
        res.status(400).json(error);
    }
});
ProductRoute.get("/category", async (req, res) => {
    const query = req.query.q || "";
    const category = req.query.cateID || "";
    console.log(category, query);
    try {
        const products = await product_model_1.default.findAll({
            where: {
                title: {
                    [sequelize_1.Op.like]: [`%${query}%`]
                },
                categoryID: {
                    [sequelize_1.Op.like]: [`%${category}%`]
                }
            }
        });
        // console.log(products)
        res.json(products);
    }
    catch (error) {
        res.status(400).json(error);
    }
});
ProductRoute.get("/id/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const products = await product_model_1.default.findAll({
            where: {
                id: [id]
            }
        });
        // console.log(products)
        res.json(products);
    }
    catch (error) {
        res.status(400).json(error);
    }
});
ProductRoute.get("/new", async (req, res) => {
    try {
        const products = await product_model_1.default.findAll({
            limit: 4,
            order: [["createdAt", "DESC"]]
        });
        res.json(products);
    }
    catch (error) {
        res.status(400).json(error);
    }
});
ProductRoute.get("/featured", async (req, res) => {
    try {
        const products = await product_model_1.default.findAll({
            limit: 8,
            order: [["createdAt", "DESC"]]
        });
        res.json(products);
    }
    catch (error) {
        res.status(400).json(error);
    }
});
ProductRoute.get("/search", async (req, res) => {
    const query = req.query.q || "";
    const category = req.query.cate || "";
    try {
        const products = await product_model_1.default.findAll({
            limit: 8,
            order: [["createdAt", "DESC"]],
            where: {
                title: {
                    [sequelize_1.Op.like]: [`%${query}%`]
                },
                categoryID: {
                    [sequelize_1.Op.like]: [`%${category}%`]
                }
            }
        });
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
        await product_model_1.default.destroy({
            where: {
                id: id
            }
        });
        res.status(200).json({ msg: "Deleted successful" });
    }
    catch (error) {
        res.status(400).json(error);
    }
});
exports.default = ProductRoute;
