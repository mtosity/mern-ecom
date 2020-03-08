import express, { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "../models/user.model";
import { LoginError, SignUpError } from "../utils/ErrorType";
import {RoleType} from "../utils/RoleType";

const users = express.Router();
require("dotenv").config();

users.get("/sync", (req, res) => {
  User.sync();
  res.json({ sa: "sla" });
});

users.get("/sync/force", (req, res) => {
  User.sync({force: true});
  res.json({ sa: "sla" });
});

users.post("/signup", async (req, res) => {
  const user = await User.findOne({
    where: {
      email: req.body.email
    }
  });
  if (!user) {
    try {
      const {email, password, name, address, isBuyer, isSeller} = req.body;
      const hashPass = await bcrypt.hash(password, 10);
      let role = -1;
      if(req.body.isBuyer){
        role = isSeller ? RoleType.Both : RoleType.Buyer;
      }else{
        role = isBuyer ? RoleType.Both : RoleType.Seller;
      }
      await User.create({
        email: email,
        password: hashPass,
        name: name,
        address: address,
        role: role
      });
      res.status(200).json({ status: "user signned up" });
    } catch (err) {
      res.status(400).json(err);
    }
  } else {
    res
      .status(400)
      .json({
        name: "UserSignUpError",
        errors: [{ message: SignUpError.UserExisted, path: "email" }]
      });
  }
});

users.post("/login", (req, res) => {
  User.findOne({
    where: {
      email: req.body.email
    }
  })
    .then(user => {
      if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          res.status(200).json(user);
        } else {
          res
            .status(400)
            .json({
              name: "UserLoginError",
              errors: [{ message: LoginError.WrongPass, path: "password" }]
            });
        }
      } else {
        res
          .status(400)
          .json({
            name: "UserLoginError",
            errors: [{ message: LoginError.UserNotExisted, path: "email" }]
          });
      }
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

export default users;
