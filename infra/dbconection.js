require("dotenv").config();

import mysql from "mysql";

const connection = mysql.createConnection({
  host: process.env.MYSQL_ROOT_HOST,
  port: 3207,
  user: process.env.MYSQL_ROOT_USER,
  password: process.env.MYSQL_ROOT_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});

export default connection;
