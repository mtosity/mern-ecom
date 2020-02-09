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

class Role extends Model {
  public id!: number;
  public name!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Role.init(
  {
      id: {
          type: DataTypes.UUIDV4,
          primaryKey: true,
          allowNull: false
      },
      name: {
          type: DataTypes.STRING,
          allowNull: false
      }
  },
  {
    sequelize: sequelize,
    tableName: "roles"
  }
);

export default User;
