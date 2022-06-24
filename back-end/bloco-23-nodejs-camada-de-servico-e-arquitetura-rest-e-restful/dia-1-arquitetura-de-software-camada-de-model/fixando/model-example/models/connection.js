// models/connection.js

const mysql = require('mysql2/promise');

const connection = mysql.createPool({
	host: 'localhost',
	user: 'root',
	password: 'admin',
	database: 'model_example',
  port: 3305 
});

module.exports = connection;