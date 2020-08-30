const Promise = require("bluebird");
var mysql = require("mysql");
const { DB_CONFIG } = require("./config");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

//BD_CONFIG = require("./config");

let readAllUser = async () => {
  try {
    console.log("Rahul");

    //Connection With DB
    var connection = mysql.createConnection(DB_CONFIG);
    await connection.connectAsync();
    console.log("Connection Successful");

    let sql = "SELECT * FROM USER";
    let results = await connection.queryAsync(sql);

    console.log(results);

    //Close the Connection
    connection.end();

    return results;
  } catch (err) {
    console.log("error");
  }
};

module.exports = { readAllUser };
