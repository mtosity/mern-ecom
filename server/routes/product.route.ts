import express, { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import Product from "../models/product.model";
import { LoginError, SignUpError } from "../utils/ErrorType";
import { RoleType } from "../utils/RoleType";
import { uuid } from "uuidv4";

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

export default ProductRoute;
