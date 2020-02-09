import { Sequelize, Model, DataTypes, BuildOptions } from "sequelize";
import {
  HasManyGetAssociationsMixin,
  HasManyAddAssociationMixin,
  HasManyHasAssociationMixin,
  Association,
  HasManyCountAssociationsMixin,
  HasManyCreateAssociationMixin
} from "sequelize";

// const sequelize = new Sequelize('UQRP7eS5tP', 'UQRP7eS5tP', 'HeCrNGQNYr', {
//     host: 'remotemysql.com',
//     port: 3306,
//     dialect: 'mysql'
// });

const sequelize = new Sequelize(
  "mysql://jn2Sep8vJX:cHLEv1lOPS@remotemysql.com:3306/jn2Sep8vJX"
);

// sequelize
//   .sync()
//   .then(() => {
//     return User.create({
//       username: "janedoe"
//     });
//   })
//   .then(function(jane) {
//     console.log(
//       jane.get({
//         plain: true
//       })
//     );
//   });
export default sequelize;

