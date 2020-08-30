const Promise = require("bluebird");
var mysql = require("mysql");
const config = require("./config");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

let addRecord = async (input) => {
  const connection = mysql.createConnection(config.DB_CONFIG);
  await connection.connectAsync();

  let sql = "INSERT INTO USER (USERNAME,PASSWORD,EMAIL,DOB) VALUES(?,?,?,?)";
  await connection.queryAsync(sql, [
    input.username,
    input.password,
    input.email,
    input.dob,
  ]);

  await connection.endAsync();
  return;
};

module.exports = { addRecord };
