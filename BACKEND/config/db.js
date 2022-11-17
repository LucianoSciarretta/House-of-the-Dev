const { Sequelize } = require("sequelize");
const sequelize = require("sequelize");
const db = new Sequelize("House_of_the_Dev", null, null, {
  host: "localhost",
  dialect: "postgres",
  logging: false
});

module.exports = db;
