"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize_2 = __importDefault(require("../config/sequelize"));
const uuidv4_1 = require("uuidv4");
class Category extends sequelize_1.Model {
}
Category.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        primaryKey: true,
        defaultValue: uuidv4_1.uuid()
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Category have no name"
            },
        }
    },
    gender: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Category have no gender"
            },
            isIn: {
                args: [["female", "male"]],
                msg: "Category have gender not in female, male or both"
            }
        }
    }
}, {
    sequelize: sequelize_2.default,
    tableName: "category"
});
exports.default = Category;
