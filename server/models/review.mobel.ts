import { Model, DataTypes } from "sequelize";
import sequelize from "../config/sequelize";

class Review extends Model {
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
    productID: {
      type: DataTypes.UUID,
      primaryKey: true
    },
    userID: {
      type: DataTypes.UUID,
      primaryKey: true
    },
    cmt: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    stars: {
      type: DataTypes.FLOAT.UNSIGNED,
      allowNull: false,
    }
  },
  {
    sequelize: sequelize,
    tableName: "review"
  }
);

export default Review;
