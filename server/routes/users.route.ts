import express, { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { uuid } from "uuidv4";

import User from "../models/users.model";
import sequelize from "../config/sequelize";

const users = express.Router();
require("dotenv").config();

users.get("/", (req, res) => {
  // sequelize.sync().then(() =>
  //   User.create({
  //     email: 'req.body.email',
  //     password: 'req.body.password',
  //     firstName: 'req.body.firstName',
  //     lastName: 'req.body.lastName',
  //     roleId: 1
  //   })
  // );
  // res.send("users");
  res.send('sla')
});

users.post("/register", async (req, res) => {
  const today = new Date();

  const user = await User.findOne({
    where: {
      email: req.body.email
    }
  });
  if (user === null) {
    try {
      const hashPass = await bcrypt.hash(req.body.password, 10);
      const newUser = await User.create({
        email: req.body.email,
        password: hashPass,
        firstName: req.body.name,
        lastName: req.body.name,
        roleId: 1
      });
      res.json({ status: req.body.email + " registered!" });
    } catch (err) {
      res.send("error: " + err);
    }
  } else{
    res.send('existed user')
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
          res.status(400).json({ error: "wrong pass" });
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
