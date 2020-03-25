import { Model, DataTypes } from "sequelize";
import sequelize from "../config/sequelize";
import { uuid } from "uuidv4";

class Category extends Model {
  public id!: string;
  public name!: string;
  public gender!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Category.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: uuid()
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Category have no name"
        },
      }
    },
    gender: {
      type: DataTypes.STRING,
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
  },
  {
    sequelize: sequelize,
    tableName: "category"
  }
);

export default Category;
