
const dotenv= require("dotenv");
dotenv.config();
const db = {
  HOST: `localhost`,
  USER: `${process.env.DB_USER}`,
  PASSWORD: `${process.env.DB_PASSWORD}`,
  DB: `${process.env.DATABASE}`,
  PORT: process.env.DB_PORT,
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};

module.exports= db;
