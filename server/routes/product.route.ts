import {uuid} from "uuidv4";
import express from "express";
import Product from "../models/product.model";
const ProductRoute = express.Router();
require("dotenv").config();

ProductRoute.get("/sync", async (req, res) => {
  await Product.sync();
  res.json({ msg: "Table synced" });
});
ProductRoute.get("/sync/force", async (req, res) => {
  await Product.sync({ force: true });
  res.json({ msg: "Table synced" });
});
ProductRoute.put("/", async (req, res) => {
  const {
    title,
    description,
    quantity,
    image,
    originPrice,
    salePrice,
    categoryID,
    gender
  } = req.body;

  try {
    await Product.create({
      id: uuid(),
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
  } catch (error) {
    res.status(400).json(error);
  }
});

ProductRoute.get("/", async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    res.status(400).json(error);    
  }
});

ProductRoute.delete("/truncate", async (req, res) => {
  try {
    await Product.destroy({ truncate: true });
    res.json({ msg: "Table truncated" });
  } catch (error) {
    res.status(400).json(error);
  }
});

ProductRoute.delete("/", async (req, res) => {
  const { id } = req.body;
  try {
    await Product.destroy({where: {
      id: id
    }})
    res.status(200).json({ msg: "Deleted successful" });
  } catch (error) {
    res.status(400).json(error);
  }
});

export default ProductRoute;
