import { Model, DataTypes } from "sequelize";
import sequelize from "../config/sequelize";
import { uuid } from "uuidv4";

class Product extends Model {
    public id!: number;
    public title!: string;
    public description!: string;
    public quantity!:number;
    public image!:string;
    public originPrice!:number;
    public salePrice!:number;
    public categoryID!:number;
    public gender!: string;
  
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Product.init({
  id:{
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: uuid()
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
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: "Product have no quantity"
      },
      min: {
        args: [0],
        msg: "Product must have quantity greater or equal than zero"
      }
    }
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: "Product have no image"
      }
    }
  },
  originPrice: {
    type: DataTypes.FLOAT.UNSIGNED,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: "Product have no origin price"
      },
      min: {
        args: [0],
        msg: "Product must have origin price greater or equal than zero"
      }
    }
  },
  salePrice: {
    type: DataTypes.FLOAT.UNSIGNED,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: "Product have no sale price"
      },
      min: {
        args: [0],
        msg: "Product must have sale price greater or equal than zero"
      }
    }
  },
  categoryID: {
    type: DataTypes.UUID,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: "Product have no category"
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
})

export default Product;