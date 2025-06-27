require("dotenv").config();
const { Pool } = require("pg");

const HOSTNAME = process.env.HOSTNAME;
const USER = process.env.USER;
const DATABASE = process.env.DATABASE;
const PASSWORD = process.env.PASSWORD;
const PORT = process.env.DB_PORT;

module.exports = new Pool({
  host: HOSTNAME,
  user: USER,
  database: DATABASE,
  password: PASSWORD,
  port: PORT,
});
