import { Sequelize } from "sequelize";

// const sequelize = new Sequelize('UQRP7eS5tP', 'UQRP7eS5tP', 'HeCrNGQNYr', {
//     host: 'remotemysql.com',
//     port: 3306,
//     dialect: 'mysql'
// });

// const sequelize = new Sequelize(
//   "mysql://jn2Sep8vJX:cHLEv1lOPS@remotemysql.com:3306/jn2Sep8vJX"
// );
// const sequelize = new Sequelize('minhtamos', 'minhtamos', '123qwe!@#', {
//     host: 'db4free.net',
//     port: 3306,
//     dialect: 'mysql'
// });
require("dotenv").config();
const sequelize = new Sequelize(
  process.env.MYSQL_DATABASE || "",
  process.env.MYSQL_USERNAME || "",
  process.env.MYSQL_PASSWORD || "",
  {
    host: process.env.MYSQL_HOST || "",
    dialect: "mysql",
    port: parseInt(process.env.MYSQL_PORT || "0")
  }
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
