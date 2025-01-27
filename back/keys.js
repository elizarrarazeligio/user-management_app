import mysql from "mysql";

let db = mysql.createConnection({
  host: "bhikecdepojvzu6fpclq-mysql.services.clever-cloud.com",
  user: "usifh6gqtava4wjp",
  password: "QQREzE5YihRo7bSzGoVG",
  database: "bhikecdepojvzu6fpclq",
  port: "3306",
});

export default db;
