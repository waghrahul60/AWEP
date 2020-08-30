const Promise = require("bluebird");
var mysql = require("mysql");

let user = require("./main");

const { DB_CONFIG } = require("./config");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

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

let addRecordWithParameter = async (id, username, password, email, dob) => {
  const connection = mysql.createConnection(DB_CONFIG);

  await connection.connectAsync();
  //logic
  let sql =
    "INSERT INTO USER (ID,USERNAME,PASSWORD,EMAIL,DOB) VALUES(?,?,?,?,?)";
  let operation = await connection.queryAsync(sql, [
    id,
    username,
    password,
    email,
    dob,
  ]);

  await connection.endAsync();
  return operation;
};

let addRecordWithParameterJson = async (user) => {
  const connection = mysql.createConnection(DB_CONFIG);

  await connection.connectAsync();
  //logic
  let sql =
    "INSERT INTO USER (ID,USERNAME,PASSWORD,EMAIL,DOB) VALUES(?,?,?,?,?)";
  let operation = await connection.queryAsync(sql, [
    user.id,
    user.username,
    user.password,
    user.email,
    user.dob,
  ]);

  await connection.endAsync();
  return operation;
};

module.exports = {
  addRecord,
  addRecordWithParameter,
  addRecordWithParameterJson,
};
