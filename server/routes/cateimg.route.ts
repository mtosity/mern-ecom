import express from "express";
import { uuid } from "uuidv4";
import SubImg from "../models/subimg.model";
import Product from "../models/product.model";
import CateImg from "../models/cateimg.model";
import Category from "../models/category.model";

const CateImgRoute = express.Router();
require("dotenv").config();

CateImgRoute.get("/sync/force", async (req, res) => {
  await CateImg.sync({ force: true });
  res.json({ msg: "Table synced" });
});

CateImgRoute.get("/sync", async (req, res) => {
  await CateImg.sync();
  res.json({ msg: "Table synced" });
});

CateImgRoute.delete("/truncate", async (req, res) => {
  try {
    await CateImg.destroy({ truncate: true });
    res.status(200).json({ msg: "Table truncated" });
  } catch (error) {
    res.status(400).json(error);
  }
});

CateImgRoute.put("/", async (req, res) => {
  const { categoryID, image } = req.body;
  try {
    const existedPro = await Category.findOne({
      where: { id: categoryID }
    });
    if (existedPro === null) {
      res.status(400).json({ errors: [{ message: "No product have this ID" }] });
    } else {
      await CateImg.create({
        id: uuid(),
        categoryID: categoryID,
        image: image
      });
      res.status(200).json({ msg: "Added successful" });
    }
  } catch (error) {
    res.status(400).json(error);
  }
});

CateImgRoute.delete("/", async (req, res) => {
  const { id } = req.body;
  try {
    await CateImg.destroy({
      where: {
        id: id
      }
    });
    res.status(200).json({ msg: "Deleted successful" });
  } catch (error) {
    res.status(400).json(error);
  }
});

CateImgRoute.get("/", async (req, res) => {
  const categories = await CateImg.findAll();
  res.json(categories);
});

export default CateImgRoute;
