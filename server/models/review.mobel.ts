import { Model, DataTypes } from "sequelize";
import sequelize from "../config/sequelize";
import { uuid } from "uuidv4";

class Review extends Model {
  public id!:string;
  public productID!: string;
  public userID!: string;
  public cmt!: string;
  public userName!: string;
  public stars!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Review.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: uuid()
    },
    productID: {
      type: DataTypes.UUID,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Product not found"
        }
      }
    },
    userID: {
      type: DataTypes.UUID,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "You have to login first"
        }
      }
    },
    cmt: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Leave your comment first ^^"
        }
      }
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Leave your name or nick name ^^"
        }
      }
    },
    stars: {
      type: DataTypes.FLOAT.UNSIGNED,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Stars empty"
        }
      }
    }
  },
  {
    sequelize: sequelize,
    tableName: "review"
  }
);

export default Review;
