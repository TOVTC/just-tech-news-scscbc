const { Sequelize } = require("sequelize");
// require dotenv package for MySQL credentials
require("dotenv").config();

// import the Sequelize constructor from the library
let sequelize;

if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
    // create connection to our database, pass in your MySQL information for username and password
    sequelize  = new Sequelize(process.env.DB_NAME, process.env.USER, process.env.PASSWORD, {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306
    });
}

module.exports = sequelize;