import { Sequelize, Model, DataTypes, BuildOptions } from "sequelize";
import {
  HasManyGetAssociationsMixin,
  HasManyAddAssociationMixin,
  HasManyHasAssociationMixin,
  Association,
  HasManyCountAssociationsMixin,
  HasManyCreateAssociationMixin
} from "sequelize";
import sequelize from "../config/sequelize";
import { uuid } from "uuidv4";

class Order extends Model {
  public productID!: string;
  public userID!: string;
  public quantity!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Order.init(
  {
    productID: {
      type: DataTypes.UUID,
      primaryKey: true
    },
    userID: {
      type: DataTypes.UUID,
      primaryKey: true
    },
    quantity: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: {
          args: [["black", "green", "blue", "red"]],
          msg: "Order status must be black green blue red"
        }
      }
    },
    size: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: {
          args: [["sm", "md", "lg", "xl"]],
          msg: "Order status must be sm md lg xl"
        }
      }
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: {
          args: [["cart", "ordered", "delivered"]],
          msg: "Order status must be cart ordered delivered"
        }
      }
    }
  },
  {
    sequelize: sequelize,
    tableName: "cart"
  }
  );
  
  export default Order;