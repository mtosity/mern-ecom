"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize_2 = __importDefault(require("../config/sequelize"));
const uuidv4_1 = require("uuidv4");
class SubImg extends sequelize_1.Model {
}
SubImg.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        primaryKey: true,
        defaultValue: uuidv4_1.uuid()
    },
    productID: {
        type: sequelize_1.DataTypes.UUID
    },
    image: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true
    }
}, {
    sequelize: sequelize_2.default,
    tableName: "subimg"
});
exports.default = SubImg;
