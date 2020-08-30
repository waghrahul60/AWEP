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
let addRecord = async () => {
  const connection = mysql.createConnection(DB_CONFIG);

  await connection.connectAsync();
  //logic
  let sql = "INSERT INTO USER (ID,USERNAME,PASSWORD,EMAIL) VALUES(?,?,?,?)";
  let operation = await connection.queryAsync(sql, [
    "1",
    "Kalpesh Patil",
    "hvcdg556656",
    "kp@gmail.com",
  ]);

  await connection.endAsync();
  return operation;
};

addRecord();
