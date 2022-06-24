const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  user: 'root',
  password: 'admin',
  host: 'localhost',
  database: 'model_example',
  port: 3305
});

module.exports = connection;