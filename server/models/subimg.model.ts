import { Model, DataTypes } from "sequelize";
import sequelize from "../config/sequelize";
import { uuid } from "uuidv4";

class SubImg extends Model {
  public id!: number;
  public productID!: number;
  public image!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

SubImg.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: uuid()
    },
    productID: {
      type: DataTypes.UUID
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

export default SubImg;
