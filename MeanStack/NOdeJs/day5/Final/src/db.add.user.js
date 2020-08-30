const Promise = require("bluebird");
const mysql = require("mysql");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const config = require("./db.config");

let addRecord = async (input) => {
  const connection = mysql.createConnection(config.DB_CONFIG);
  await connection.connectAsync();

  let sql =
    "INSERT INTO USER (ID,USERNAME, PASSWORD, EMAIL, MOBILE) VALUES (?,?, ?, ?, ?)";
  await connection.queryAsync(sql, [
    input.id,
    input.username,
    input.password,
    input.email,
    input.mobile,
  ]);

  await connection.endAsync();

  return;
};

module.exports = { addRecord };
