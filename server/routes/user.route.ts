import express, { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { uuid } from "uuidv4";

import User from "../models/user.model";
import sequelize from "../config/sequelize";

const users = express.Router();
require("dotenv").config();

users.get("/", (req, res) => {
  User.sync();
  res.json({sa: 'sla'})
});

users.post("/signup", async (req, res) => {
  const user = await User.findOne({
    where: {
      email: req.body.email
    }
  });
  if (!user) {
    console.log('hi')
    try {
      const hashPass = await bcrypt.hash(req.body.password, 10);
      // await sequelize.sync();
      await User.create({
        email: req.body.email,
        password: hashPass,
        name: req.body.name,
        role: 1
      });
      res.status(200).json({status: 'user signned up'})
    } catch (err) {
      res.status(400).json(err);
    }
  } else{
    res.status(400).json({name: 'UserSignUpError', errors: [{message: "User existed", path: "email"}]});
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
          let token = jwt.sign({ user }, "123");
          res.status(200).json({ token: token });
        }else{
          res.status(400).json({ error: "Wrong pass" });
        }
      } else {
        res.status(400).json({ error: "User does not exist" });
      }
    })
    .catch(err => {
      res.status(400).json({ error: err });
    });
});

users.get("/profile", (req, res) => {

  const token = req.header('auth-token');
  console.log(token);
  if (token !== undefined) {
    try {
      var decoded = jwt.verify(token, "123");
      res.send(decoded);
      
    } catch (error) {
      res.send(error)
    }
    // User.findOne({
    //   where: {
    //     id: decoded.id
    //   }
    // })
    //   .then(user => {
    //     if (user) {
    //       res.json(user);
    //     } else {
    //       res.send("User does not exist");
    //     }
    //   })
    //   .catch(err => {
    //     res.send("error: " + err);
    //   });
  } else{
    res.json({error: 'no token'})
  }
});

export default users;
