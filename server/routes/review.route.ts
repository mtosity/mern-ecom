import express from "express";
import Review from "../models/review.mobel";
import { uuid } from "uuidv4";

const ReviewRoute = express.Router();
require("dotenv").config();

ReviewRoute.get("/sync/force", async (req, res) => {
  await Review.sync({ force: true });
  res.json({ msg: "Table synced" });
});

ReviewRoute.get("/sync", async (req, res) => {
  await Review.sync();
  res.json({ msg: "Table synced" });
});

ReviewRoute.delete("/truncate", async (req, res) => {
  try {
    await Review.destroy({ truncate: true });
    res.status(200).json({ msg: "Table truncated" });
  } catch (error) {
    res.status(400).json(error);
  }
});

ReviewRoute.post("/", async (req, res) => {
  const { productID, userID, cmt, userName, stars } = req.body;
  try {
    const existedCate = await Review.findOne({
      where: { productID: productID, userID: userID }
    });
    if (existedCate === null) {
      await Review.create({
        id: uuid(),
        productID,
        userID,
        cmt,
        userName,
        stars
      });
      res.status(200).json({ msg: "Added successful" });
    } else {
      res.status(400).json({ errors: [{ message: "Existed review" }] });
    }
  } catch (error) {
    res.status(400).json(error);
  }
});

ReviewRoute.delete("/", async (req, res) => {
  const { id } = req.body;
  try {
    await Review.destroy({
      where: {
        id: id
      }
    });
    res.status(200).json({ msg: "Deleted successful" });
  } catch (error) {
    res.status(400).json(error);
  }
});

ReviewRoute.get("/:productID", async (req, res) => {
  const {productID} = req.params
  const categories = await Review.findAll({
    where: {
      productID: productID
    }
  });
  res.json(categories);
});

export default ReviewRoute;
