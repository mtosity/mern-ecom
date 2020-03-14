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
      type: DataTypes.INTEGER.UNSIGNED
    }
  },
  {
    sequelize: sequelize,
    tableName: "cart"
  }
  );
  
  export default Order;