module.exports = {
  development: {
    username: process.env.MYSQL_USER,
    password: process.env.MSQL_PASSWORD,
    database: "associations",
    host: process.env.MYSQL_HOST,
    dialect: "mysql"
  }
}
