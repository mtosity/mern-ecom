import express, { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { LoginError, SignUpError } from "../utils/ErrorType";
import { RoleType } from "../utils/RoleType";
import Category from "../models/category.model";

const CategoryRoute = express.Router();
require("dotenv").config();

CategoryRoute.get("/sync", async (req, res) => {
  await Category.sync();
  res.json({ msg: "Table synced" });
});

CategoryRoute.put("/", async (req, res) => {
  const { name } = req.body;
  try {
    const existedCate = await Category.findOne({ where: { name: name } });
    if (existedCate === null) {
      await Category.create({
        name: name
      });
      res.status(200).json({ status: "added successful" });
    }else{
      res.status(400).json({errors: [{message: 'Existed category'}]});
    }
  } catch (error) {
    res.status(400).json(error);
  }
});

CategoryRoute.delete("/", async (req, res) => {
  const { id } = req.body;
  try {
    await Category.destroy({where: {
      id: id
    }})
    res.status(200).json({ status: "Deleted successful" });
  } catch (error) {
    res.status(400).json(error);
  }
});

// CategoryRoute.delete("/sync", async (req, res) => {
//   await Product.sync();
//   res.json({ msg: "Table synced" });
// });

CategoryRoute.get("/all", async (req, res) => {
  const categories = await Category.findAll();
  res.json({ categories });
});

export default CategoryRoute;