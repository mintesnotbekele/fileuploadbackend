const Sequelize = require("sequelize");
const FileModel = require("../models/files.model.js");
const config = require("../config/db.config.js");
const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
    host: config.HOST,
    port: config.PORT,
    dialect: config.dialect,
    operatorsAliases: false,
    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle,
    },
  });
  const db = {};

  db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.files = FileModel(sequelize, Sequelize);

module.exports = db;