"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize_2 = __importDefault(require("../config/sequelize"));
class Order extends sequelize_1.Model {
}
Order.init({
    productID: {
        type: sequelize_1.DataTypes.UUID,
        primaryKey: true
    },
    userID: {
        type: sequelize_1.DataTypes.UUID,
        primaryKey: true
    },
    quantity: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED
    }
}, {
    sequelize: sequelize_2.default,
    tableName: "cart"
});
exports.default = Order;
