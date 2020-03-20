"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize_2 = __importDefault(require("../config/sequelize"));
const uuidv4_1 = require("uuidv4");
class Product extends sequelize_1.Model {
}
Product.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        primaryKey: true,
        defaultValue: uuidv4_1.uuid()
    },
    title: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Product have no title"
            }
        }
    },
    description: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Product have no description"
            }
        }
    },
    quantity: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Product have no quantity"
            },
            min: {
                args: [0],
                msg: "Product must have quantity greater or equal than zero"
            }
        }
    },
    image: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Product have no image"
            }
        }
    },
    originPrice: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Product have no origin price"
            },
            min: {
                args: [0],
                msg: "Product must have origin price greater or equal than zero"
            }
        }
    },
    salePrice: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Product have no sale price"
            },
            min: {
                args: [0],
                msg: "Product must have sale price greater or equal than zero"
            }
        }
    },
    categoryID: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Product have no category"
            }
        }
    },
    gender: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Product have no gender"
            },
            isIn: {
                args: [["female", "male", "both"]],
                msg: "Product have gender not in female, male or both"
            }
        }
    }
}, {
    sequelize: sequelize_2.default,
    tableName: "product"
});
exports.default = Product;
