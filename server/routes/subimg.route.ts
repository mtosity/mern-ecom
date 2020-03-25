import express from "express";
import { uuid } from "uuidv4";
import SubImg from "../models/subimg.model";
import Product from "../models/product.model";

const SubImgRoute = express.Router();
require("dotenv").config();

SubImgRoute.get("/sync/force", async (req, res) => {
  await SubImg.sync({ force: true });
  res.json({ msg: "Table synced" });
});

SubImgRoute.get("/sync", async (req, res) => {
  await SubImg.sync();
  res.json({ msg: "Table synced" });
});

SubImgRoute.delete("/truncate", async (req, res) => {
  try {
    await SubImg.destroy({ truncate: true });
    res.status(200).json({ msg: "Table truncated" });
  } catch (error) {
    res.status(400).json(error);
  }
});

SubImgRoute.put("/", async (req, res) => {
  const { productID, image } = req.body;
  try {
    const existedPro = await Product.findOne({
      where: { id: productID }
    });
    if (existedPro === null) {
      res.status(400).json({ errors: [{ message: "No product have this ID" }] });
    } else {
      await SubImg.create({
        id: uuid(),
        productID: productID,
        image: image
      });
      res.status(200).json({ msg: "Added successful" });
    }
  } catch (error) {
    res.status(400).json(error);
  }
});

SubImgRoute.delete("/", async (req, res) => {
  const { id } = req.body;
  try {
    await SubImg.destroy({
      where: {
        id: id
      }
    });
    res.status(200).json({ msg: "Deleted successful" });
  } catch (error) {
    res.status(400).json(error);
  }
});

SubImgRoute.get("/", async (req, res) => {
  const categories = await SubImg.findAll();
  res.json(categories);
});

export default SubImgRoute;
