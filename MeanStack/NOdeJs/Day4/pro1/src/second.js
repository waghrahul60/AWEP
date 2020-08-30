const Promise = require("bluebird");
var mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

let readAllUser = async () => {
  try {
    console.log("Rahul");

    //Connection With DB
    var connection = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "dac2020",
    });
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

readAllUser();
