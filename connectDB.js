require('dotenv').config();

const mysql = require('mysql');

const { MYSQL_USERNAME, MYSQL_PASSWORD, MYSQL_HOSTNAME, MYSQL_PORT, MYSQL_DB } = process.env;

let con = mysql.createConnection({
  host: MYSQL_HOSTNAME,
  user: MYSQL_USERNAME,
  password: MYSQL_PASSWORD,
  database: MYSQL_DB
});

exports.connect = con;

