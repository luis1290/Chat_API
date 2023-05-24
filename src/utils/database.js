const { Sequelize } = require("sequelize");

const db = new Sequelize({
  host: "localhost",
  port: 5432,
  database: "db_chat_api",
  username: "postgres",
  password: "1234",
  dialect: "postgres",
  logging: false,
});

module.exports = db;
