import { Model, DataTypes } from "sequelize";
import sequelize from "../config/sequelize";
import { uuid } from "uuidv4";

class CateImg extends Model {
  public id!: number;
  public categoryID!: number;
  public image!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

CateImg.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: uuid()
    },
    categoryID: {
      type: DataTypes.UUID,
      primaryKey: true
    },
    image: {
      type: DataTypes.STRING,
      primaryKey: true
    }
  },
  {
    sequelize: sequelize,
    tableName: "subimg"
  }
);

export default CateImg;
