const Promise = require("bluebird");
var mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

let DB_CONFIG = {
  host: "localhost",
  user: "root",
  password: "",
  database: "dac2020",
};
let readAllUser = async () => {
  try {
    console.log("Rahul");
    var connection = mysql.createConnection(DB_CONFIG);
    await connection.connectAsync();
    console.log("Connection Successful");

    console.log(results);

    //Close the Connection
    connection.end();

    return results;
  } catch (err) {
    console.log("error");
  }
};

let readByQuery = async () => {
  var connection = mysql.createConnection(DB_CONFIG);
  await connection.connectAsync();

  //logic
  let sql = "SELECT * FROM USER WHERE ID=0";
  let results = await connection.queryAsync(sql);
  console.log(results);

  await connection.endAsync();
};

let readByQuery1 = async () => {
  var connection = mysql.createConnection(DB_CONFIG);
  await connection.connectAsync();

  //logic
  let sql = "SELECT * FROM USER WHERE ID=?";
  let results = await connection.queryAsync(sql, [0]);
  console.log(results);

  await connection.endAsync();
};

let readByQuery2 = async () => {
  var connection = mysql.createConnection(DB_CONFIG);
  await connection.connectAsync();

  //logic
  let sql = "SELECT * FROM USER WHERE ID=? AND EMAIL=?";
  let results = await connection.queryAsync(sql, [0, "dsk;gjhlk@gmail.com"]);
  console.log(results);

  await connection.endAsync();
};

//readAllUser();
//readByQuery();
//readByQuery1();
readByQuery2();
