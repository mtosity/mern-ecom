import { Model, DataTypes } from "sequelize";
import sequelize from "../config/sequelize";
import { uuid } from "uuidv4";
import { SignUpError } from "../utils/ErrorType";

class User extends Model {
  public id!: number;
  public email!: string;
  public password!: string;
  public name!: string;
  public role!: string;
  public address!:string;
  public phone!:string;
  public avatar!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

User.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: uuid()
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        isEmail: {
          msg: SignUpError.NotEmail
        }
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
          args:
            "(?=^.{8,}$)((?=.*d)|(?=.*W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$",
          msg: SignUpError.NotPassword
        }
      }
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: {
          args: [["admin", "user"]],
          msg: "User role must be admin or user"
        }
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: SignUpError.NotName
        }
      }
    },
    avatar: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue:
        "https://i.ibb.co/kJ9W9LL/0f9a7f73af1e8fbada4deb9e78631e33-man-user-operator-clip-art-at-clkercom-vector-clip-art-online-360-598.png"
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize: sequelize,
    tableName: "user"
  }
);
export default User;
