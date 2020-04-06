"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize_2 = __importDefault(require("../config/sequelize"));
const uuidv4_1 = require("uuidv4");
class Order extends sequelize_1.Model {
}
Order.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: uuidv4_1.uuid(),
    },
    productID: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
        validate: {
            min: {
                args: [0],
                msg: "Quantity must bigger than 0",
            },
        },
    },
    userID: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
        validate: {
            min: {
                args: [0],
                msg: "Quantity must bigger than 0",
            },
        },
    },
    quantity: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        validate: {
            min: {
                args: [0],
                msg: "Quantity must bigger than 0",
            },
        },
    },
    productName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Order must have product name",
            },
        },
    },
    color: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        validate: {
            isIn: {
                args: [["black", "green", "blue", "red"]],
                msg: "Order status must be black green blue red",
            },
        },
    },
    size: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        validate: {
            isIn: {
                args: [["S", "M", "L", "XL"]],
                msg: "Order status must be sm md lg xl",
            },
        },
    },
    status: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        validate: {
            isIn: {
                args: [["ordered", "delivered"]],
                msg: "Order status must be cart ordered delivered",
            },
        },
    },
    price: {
        type: sequelize_1.DataTypes.FLOAT.UNSIGNED,
        allowNull: false,
        validate: {
            min: {
                args: [0],
                msg: "Price must bigger than 0",
            },
        },
    },
}, {
    sequelize: sequelize_2.default,
    tableName: "order",
});
exports.default = Order;
