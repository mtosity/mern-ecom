import express from "express";
import { LoginError, SignUpError } from "../utils/ErrorType";
import User from "../models/user.model";
import bcrypt from "bcrypt";

const UserRoute = express.Router();
require("dotenv").config();

UserRoute.get("/sync", (req, res) => {
  User.sync();
  res.json({ sa: "sla" });
});

UserRoute.get("/sync/force", (req, res) => {
  User.sync({ force: true });
  res.json({ sa: "sla" });
});

UserRoute.post("/", async (req, res) => {
  const user = await User.findOne({
    where: {
      email: req.body.email,
    },
  });
  if (!user) {
    try {
      const { email, password, name, address, role, phone } = req.body;
      const hashPass = await bcrypt.hash(password, 10);
      await User.create({
        email: email,
        password: hashPass,
        name: name,
        address: address,
        role: role,
        phone,
      });
      res.status(200).json({ msg: "user signned up" });
    } catch (err) {
      res.status(400).json(err);
    }
  } else {
    res.status(400).json({
      name: "UserRouteignUpError",
      errors: [{ message: SignUpError.UserExisted, path: "email" }],
    });
  }
});

UserRoute.post("/loginwithfg", async (req, res) => {
  const user = await User.findOne({
    where: {
      email: req.body.email,
    },
  });
  if (!user) {
    try {
      const { email, password, name, address, role, phone } = req.body;
      const hashPass = await bcrypt.hash(password, 10);
      const newUser = await User.create({
        email: email,
        password: hashPass,
        name: name,
        address: address,
        role: role,
        phone,
      });
      res.status(200).json(newUser);
    } catch (err) {
      res.status(400).json(err);
    }
  } else {
    res.status(200).json(user);
  }
});

UserRoute.get("/", async (req, res) => {
  const products = await User.findAll();
  res.json(products);
});

UserRoute.delete("/truncate", async (req, res) => {
  try {
    await User.destroy({ truncate: true });
    res.json({ msg: "Table truncated" });
  } catch (error) {
    res.status(400).json(error);
  }
});

UserRoute.delete("/", async (req, res) => {
  const { id } = req.body;
  try {
    await User.destroy({
      where: {
        id: id,
      },
    });
    res.status(200).json({ msg: "Deleted successful" });
  } catch (error) {
    res.status(400).json(error);
  }
});

UserRoute.post("/signup", async (req, res) => {
  const user = await User.findOne({
    where: {
      email: req.body.email,
    },
  });
  if (!user) {
    try {
      const { email, password, name, address, role, phone } = req.body;
      console.log(phone);
      const hashPass = await bcrypt.hash(password, 10);
      await User.create({
        email: email,
        password: hashPass,
        name: name,
        address: address,
        role: role,
        phone: phone,
      });
      res.status(200).json({ status: "user signned up" });
    } catch (err) {
      res.status(400).json(err);
    }
  } else {
    res.status(400).json({
      name: "UserRouteignUpError",
      errors: [{ message: SignUpError.UserExisted, path: "email" }],
    });
  }
});

UserRoute.post("/login", (req, res) => {
  User.findOne({
    where: {
      email: req.body.email,
    },
  })
    .then((user) => {
      if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          res.status(200).json(user);
        } else {
          res.status(400).json({
            name: "UserLoginError",
            errors: [{ message: LoginError.WrongPass, path: "password" }],
          });
        }
      } else {
        res.status(400).json({
          name: "UserLoginError",
          errors: [{ message: LoginError.UserNotExisted, path: "email" }],
        });
      }
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

UserRoute.post("/load", (req, res) => {
  User.findOne({
    where: {
      email: req.body.email,
    },
  })
    .then((user) => {
      if (user) {
        if (req.body.password === user.password) {
          res.status(200).json(user);
        } else {
          res.status(400).json({
            name: "UserLoginError",
            errors: [{ message: LoginError.WrongPass, path: "password" }],
          });
        }
      } else {
        res.status(400).json({
          name: "UserLoginError",
          errors: [{ message: LoginError.UserNotExisted, path: "email" }],
        });
      }
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

UserRoute.post("/login/admin", (req, res) => {
  User.findOne({
    where: {
      email: req.body.email,
      role: "admin",
    },
  })
    .then((user) => {
      if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          res.status(200).json(user);
        } else {
          res.status(400).json({
            name: "UserLoginError",
            errors: [{ message: LoginError.WrongPass, path: "password" }],
          });
        }
      } else {
        res.status(400).json({
          name: "UserLoginError",
          errors: [{ message: LoginError.AdminNotExisted, path: "email" }],
        });
      }
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

UserRoute.get("/mail", (req, res) => {
  const email = req.query.email || "";
  const mailjet = require("node-mailjet").connect(
    process.env.MJ_APIKEY_PUBLIC,
    process.env.MJ_APIKEY_PRIVATE
  );
  const request = mailjet.post("send", { version: "v3.1" }).request({
    Messages: [
      {
        From: {
          Email: "minhtamoshop@gmail.com",
          Name: "nguyen",
        },
        To: [
          {
            Email: email,
            Name: "nguyen",
          },
        ],
        Subject: "Greetings from MTOSHOP.",
        TextPart: "Welcome",
        HTMLPart:
          "<h3>Hi, Welcome to minhtamoshop!",
        CustomID: "AppGettingStartedTest",
      },
    ],
  });
  request
    .then((result: any) => {
      res.status(200).json(result.body);
    })
    .catch((err: any) => {
      res.status(500).json(err.statusCode);
    });
});
export default UserRoute;
