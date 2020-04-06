"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const review_mobel_1 = __importDefault(require("../models/review.mobel"));
const uuidv4_1 = require("uuidv4");
const ReviewRoute = express_1.default.Router();
require("dotenv").config();
ReviewRoute.get("/sync/force", async (req, res) => {
    await review_mobel_1.default.sync({ force: true });
    res.json({ msg: "Table synced" });
});
ReviewRoute.get("/sync", async (req, res) => {
    await review_mobel_1.default.sync();
    res.json({ msg: "Table synced" });
});
ReviewRoute.delete("/truncate", async (req, res) => {
    try {
        await review_mobel_1.default.destroy({ truncate: true });
        res.status(200).json({ msg: "Table truncated" });
    }
    catch (error) {
        res.status(400).json(error);
    }
});
ReviewRoute.post("/", async (req, res) => {
    const { productID, userID, cmt, userName, stars } = req.body;
    console.log(req.body);
    try {
        const existedCate = await review_mobel_1.default.findOne({
            where: { productID: productID, userID: userID }
        });
        if (existedCate === null) {
            await review_mobel_1.default.create({
                id: uuidv4_1.uuid(),
                productID,
                userID,
                cmt,
                userName,
                stars
            });
            res.status(200).json({ message: "Added successful" });
        }
        else {
            res.status(400).json({ errors: [{ message: "You have already reviewed" }] });
        }
    }
    catch (error) {
        res.status(400).json(error);
    }
});
ReviewRoute.delete("/", async (req, res) => {
    const { id } = req.body;
    try {
        await review_mobel_1.default.destroy({
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
ReviewRoute.get("/:productID", async (req, res) => {
    const { productID } = req.params;
    const categories = await review_mobel_1.default.findAll({
        where: {
            productID: productID
        }
    });
    res.json(categories);
});
exports.default = ReviewRoute;
