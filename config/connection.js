// import the Sequelize constructor from the library
const Sequelize = require('sequelize');
// require dotenv package for MySQL credentials
require("dotenv").config();

// create connection to our database, pass in your MySQL information for username and password
const sequelize = new Sequelize(process.env.DB_NAME, process.env.USER, process.env.PASSWORD, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

module.exports = sequelize;