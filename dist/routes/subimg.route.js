"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const uuidv4_1 = require("uuidv4");
const subimg_model_1 = __importDefault(require("../models/subimg.model"));
const product_model_1 = __importDefault(require("../models/product.model"));
const SubImgRoute = express_1.default.Router();
require("dotenv").config();
SubImgRoute.get("/sync/force", async (req, res) => {
    await subimg_model_1.default.sync({ force: true });
    res.json({ msg: "Table synced" });
});
SubImgRoute.get("/sync", async (req, res) => {
    await subimg_model_1.default.sync();
    res.json({ msg: "Table synced" });
});
SubImgRoute.get("/id/:id", async (req, res) => {
    const { id } = req.params;
    console.log(id);
    try {
        const subimgs = await subimg_model_1.default.findAll({
            where: {
                productID: id
            }
        });
        res.json(subimgs);
    }
    catch (error) {
        res.status(400).json(error);
    }
});
SubImgRoute.delete("/truncate", async (req, res) => {
    try {
        await subimg_model_1.default.destroy({ truncate: true });
        res.status(200).json({ msg: "Table truncated" });
    }
    catch (error) {
        res.status(400).json(error);
    }
});
SubImgRoute.post("/", async (req, res) => {
    const { productID, image } = req.body;
    try {
        const existedPro = await product_model_1.default.findOne({
            where: { id: productID }
        });
        if (existedPro === null) {
            res
                .status(400)
                .json({ errors: [{ message: "No product have this ID" }] });
        }
        else {
            await subimg_model_1.default.create({
                id: uuidv4_1.uuid(),
                productID: productID,
                image: image
            });
            res.status(200).json({ msg: "Added successful" });
        }
    }
    catch (error) {
        res.status(400).json(error);
    }
});
SubImgRoute.delete("/", async (req, res) => {
    const { id } = req.body;
    try {
        await subimg_model_1.default.destroy({
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
SubImgRoute.get("/", async (req, res) => {
    const categories = await subimg_model_1.default.findAll();
    res.json(categories);
});
exports.default = SubImgRoute;
