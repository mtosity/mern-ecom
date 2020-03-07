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

class Category extends Model {
  public id!: number;
  public name!: string;
  public gender!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Category.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Product have no name"
        }
      }
    },
    gender: {
      type: DataTypes.STRING,
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
  },
  {
    sequelize: sequelize,
    tableName: "product"
  }
);

export default Product;
