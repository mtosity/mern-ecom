"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize_2 = __importDefault(require("../config/sequelize"));
const uuidv4_1 = require("uuidv4");
class Review extends sequelize_1.Model {
}
Review.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        primaryKey: true,
        defaultValue: uuidv4_1.uuid()
    },
    productID: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Product not found"
            }
        }
    },
    userID: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "You have to login first"
            }
        }
    },
    cmt: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Leave your comment first ^^"
            }
        }
    },
    userName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Leave your name or nick name ^^"
            }
        }
    },
    stars: {
        type: sequelize_1.DataTypes.FLOAT.UNSIGNED,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Stars empty"
            },
            min: {
                args: [0],
                msg: "Rating from 0 to 5 stars ^^"
            },
            max: {
                args: [5],
                msg: "Rating from 0 to 5 stars ^^"
            }
        }
    }
}, {
    sequelize: sequelize_2.default,
    tableName: "review"
});
exports.default = Review;
