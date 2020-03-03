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

class User extends Model {
  public id!: number;
  public email!: string;
  public password!: string;
  public roleId!: number;
  public firstName!: string;
  public lastName!: string;
  public avatar!: string;
  public active!: boolean;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

User.init(
  {
      id: {
          type: DataTypes.INTEGER.UNSIGNED,
          primaryKey: true,
          autoIncrement: true
      },
      email: {
          type: DataTypes.STRING,
          unique: true,
          allowNull: false,
          validate: {
            isEmail: {
              msg: 'NotEmail'
            },
          }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "EmptyName"
          },
          is: {
            args: '(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$',
            msg: "Password"
          }
        }
      },
      role: {
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: false
      },
      name: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notEmpty: {
              msg: "EmptyName"
            }
          }
      },
      avatar: {
          type: DataTypes.STRING,
          allowNull: false,
          defaultValue: 'https://i.ibb.co/kJ9W9LL/0f9a7f73af1e8fbada4deb9e78631e33-man-user-operator-clip-art-at-clkercom-vector-clip-art-online-360-598.png'
      },
  },
  {
    sequelize: sequelize,
    tableName: "users"
  }
);
export default User;
