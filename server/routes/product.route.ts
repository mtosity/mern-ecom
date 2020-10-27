import { uuid } from "uuidv4";
import express from "express";
import Product from "../models/product.model";
import { Op } from "sequelize";
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
ProductRoute.post("/", async (req, res) => {
  const {
    title,
    description,
    quantity,
    image,
    originPrice,
    salePrice,
    categoryID,
    gender,
  } = req.body;
  console.log(req.body);
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
      gender,
    });
    res.status(200).json({ msg: "Added successful" });
  } catch (error) {
    res.status(400).json(error);
  }
});

ProductRoute.get("/", async (req, res) => {
  const query = req.query.q || "";
  const category = req.query.cate || "";
  const page = parseInt(req.query.page!.toString() || "1") || 1;
  try {
    const products = await Product.findAndCountAll({
      where: {
        title: {
          [Op.like]: [`%${query}%`],
        },
        categoryID: {
          [Op.like]: [`%${category}%`],
        },
      },
      limit: 8,
      offset: (page-1) * 8,
    });
    res.json(products);
  } catch (error) {
    res.status(400).json(error);
  }
});

ProductRoute.get("/id/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const products = await Product.findAll({
      where: {
        id: [id],
      },
    });
    // console.log(products)
    res.json(products);
  } catch (error) {
    res.status(400).json(error);
  }
});

ProductRoute.get("/new", async (req, res) => {
  try {
    const products = await Product.findAll({
      limit: 4,
      order: [["createdAt", "DESC"]],
    });
    res.json(products);
  } catch (error) {
    res.status(400).json(error);
  }
});

ProductRoute.get("/featured", async (req, res) => {
  try {
    const products = await Product.findAll({
      limit: 8,
      order: [["createdAt", "DESC"]],
      where: {
        gender: "female",
      },
    });
    res.json(products);
  } catch (error) {
    res.status(400).json(error);
  }
});

ProductRoute.get("/search", async (req, res) => {
  const query = req.query.q || "";
  const category = req.query.cate || "";
  try {
    const products = await Product.findAll({
      limit: 8,
      order: [["createdAt", "DESC"]],
      where: {
        title: {
          [Op.like]: [`%${query}%`],
        },
        categoryID: {
          [Op.like]: [`%${category}%`],
        },
      },
    });
    res.json(products);
  } catch (error) {
    res.status(400).json(error);
  }
});

ProductRoute.get("/page/:page", async (req, res) => {
  const page = parseInt(req.params.page);
  try {
    const products = await Product.findAndCountAll({
      limit: 8,
      offset: page * 8,
    });
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
    await Product.destroy({
      where: {
        id: id,
      },
    });
    res.status(200).json({ msg: "Deleted successful" });
  } catch (error) {
    res.status(400).json(error);
  }
});

export default ProductRoute;
