const { Sequelize } = require("sequelize");

const db = new Sequelize({
  database: "entregable4",
  port: 5432,
  host: "localhost",
  username: "postgres",
  password: "4c4d3ml0",
  dialect: "postgres",
  logging: false,
});

module.exports = db;