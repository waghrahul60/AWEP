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
      password: "Rahul@12345",
      database: "cdacdemo",
    });
    await connection.connectAsync();
    console.log("Connection Successful");

    //Close the Connection
    connection.end();
  } catch (err) {
    console.log("error");
  }
};

readAllUser();
