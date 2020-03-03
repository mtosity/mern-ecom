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