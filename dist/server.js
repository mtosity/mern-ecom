"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const sequelize_1 = __importDefault(require("./config/sequelize"));
const user_route_1 = __importDefault(require("./routes/user.route"));
const product_route_1 = __importDefault(require("./routes/product.route"));
const category_route_1 = __importDefault(require("./routes/category.route"));
const path_1 = __importDefault(require("path"));
const subimg_route_1 = __importDefault(require("./routes/subimg.route"));
const review_route_1 = __importDefault(require("./routes/review.route"));
const order_route_1 = __importDefault(require("./routes/order.route"));
const app = express_1.default();
app.use(cors_1.default());
app.use(body_parser_1.default());
app.get("/register", (req, res) => {
    res.redirect("/");
});
const api = express_1.default.Router();
api.use("/user", user_route_1.default);
api.use("/product", product_route_1.default);
api.use("/category", category_route_1.default);
api.use("/subimg", subimg_route_1.default);
api.use("/review", review_route_1.default);
api.use("/order", order_route_1.default);
app.use("/api", api);
// the __dirname is the current directory from where the script is running
// app.use(express.static(__dirname));
app.use(express_1.default.static(path_1.default.join(__dirname, "/../client", 'build')));
// app.get('/ping', function (req, res) {
//  return res.send('pong');
// });
app.get('*', function (req, res) {
    res.sendFile(path_1.default.join(__dirname, '/../client', 'build', 'index.html'));
});
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(port));
sequelize_1.default.authenticate().then(() => console.log("db connected"));
