import { Model, DataTypes } from "sequelize";
import sequelize from "../config/sequelize";
import { uuid } from "uuidv4";

class Order extends Model {
  public id!: string;
  public productID!: string;
  public productName!: string;
  public userID!: string;
  public quantity!: number;
  public color!: string;
  public size!: string;
  public status!: string;
  public price!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Order.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: uuid(),
    },
    productID: {
      type: DataTypes.UUID,
      allowNull: false,
      validate: {
        min: {
          args: [0],
          msg: "Quantity must bigger than 0",
        },
      },
    },
    userID: {
      type: DataTypes.UUID,
      allowNull: false,
      validate: {
        min: {
          args: [0],
          msg: "Quantity must bigger than 0",
        },
      },
    },
    quantity: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      validate: {
        min: {
          args: [0],
          msg: "Quantity must bigger than 0",
        },
      },
    },
    productName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Order must have product name",
        },
      },
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: {
          args: [["black", "green", "blue", "red"]],
          msg: "Order status must be black green blue red",
        },
      },
    },
    size: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: {
          args: [["S", "M", "L", "XL"]],
          msg: "Order status must be sm md lg xl",
        },
      },
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: {
          args: [["ordered", "delivered"]],
          msg: "Order status must be cart ordered delivered",
        },
      },
    },
    price: {
      type: DataTypes.FLOAT.UNSIGNED,
      allowNull: false,
      validate: {
        min: {
          args: [0],
          msg: "Price must bigger than 0",
        },
      },
    },
  },
  {
    sequelize: sequelize,
    tableName: "order",
  }
);

export default Order;
