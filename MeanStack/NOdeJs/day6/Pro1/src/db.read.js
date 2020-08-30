const Promise = require("bluebird");
const mysql = require("mysql");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const config = require("../config/dbConfig");

let readAllUserData = async () => {
  const Connection = mysql.createConnection(config.DB_CONFIG);
  await Connection.connectAsync();

  let sql = "SELECT * FROM USER";

  const result = Connection.queryAsync(sql);
  await Connection.endAsync();

  return result;

  console.log(result);
};

module.exports = { readAllUserData };

readAllUserData();
