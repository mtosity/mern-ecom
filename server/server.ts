import express, { Response, Request } from "express";
import bodyParsers from "body-parser";
import cors from "cors";

import sequelize from "./config/sequelize";

import UserRoute from "./routes/user.route";
import ProductRoute from "./routes/product.route";
import CategoryRoute from "./routes/category.route";
import path from "path";
import SubImgRoute from "./routes/subimg.route";
import ReviewRoute from "./routes/review.route";
import OrderRoute from "./routes/order.route";

const app = express();
app.use(cors());
app.use(bodyParsers());

app.get("/register", (req: Request, res: Response) => {
  res.redirect("/");
});
const api = express.Router();
api.use("/user", UserRoute);
api.use("/product", ProductRoute);
api.use("/category", CategoryRoute);
api.use("/subimg", SubImgRoute);
api.use("/review", ReviewRoute);
api.use("/order", OrderRoute);

app.use("/api", api);
// the __dirname is the current directory from where the script is running
// app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, "/../client", 'build')));
// app.get('/ping', function (req, res) {
//  return res.send('pong');
// });
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '/../client', 'build', 'index.html'));
});
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(port));
sequelize.authenticate().then(() => console.log("db connected"));
