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

class Product extends Model {
    public id!: number;
    public userID!: number;
    public title!: string;
    public description!: string;
    public quantity!:number;
    public status!:string;
    public reviewStart!:number;
  
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Product.init({
  id:{
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true
  },
  sellerID: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: "Product have no seller"
      }
    }
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: "Product have no title"
      }
    }
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: "Product have no description"
      }
    }
  },
  quantity: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: "Product have no quantity"
      },
      min: {
        args: [0],
        msg: "Product must have quantity greater than zero"
      }
    }
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: "Product have no status"
      },
      isIn: {
        args: [['avalible', 'OutOffStock']],
        msg: "Product have unknown status",
      }
    }
  },
  reviewStart: {
    type: DataTypes.FLOAT.UNSIGNED,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: "Product have no start"
      },
      min: {
        args: [0],
        msg: "Product have start lower than zero",
      },
      max: {
        args: [5],
        msg: "Product have start greater than five",
      }            
    }
  }
},
{
  sequelize: sequelize,
  tableName: "product"
})