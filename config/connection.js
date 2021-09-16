//Same connenction set up as last homework e-commerce (given)

//Imports Sequelize constructor from the library
const Sequelize = require("sequelize");

//enables access to .env variables
require("dotenv").config();

//creates connection to our database
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(
      process.env.DB_NAME,
      process.env.DB_USER,
      process.env.DB_PASSWORD,
      {
        host: "localhost",
        dialect: "mysql",
        port: 3306,
      }
    );

module.exports = sequelize;
