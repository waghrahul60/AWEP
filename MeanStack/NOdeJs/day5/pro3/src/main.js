const Promise = require("bluebird");
var mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const express = require("express");
const app = express();

const dbread = require("./bd.add");

app.get("/", async (req, res) => {
  const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "demo1",
  });

  await connection.connectAsync();

  let sql =
    "INSERT INTO USER (ID,USERNAME,PASSWORD,EMAIL,DOB) VALUES(?,?,?,?,?)";
  await connection.queryAsync(sql, [
    "NULL",
    "Kalpesh",
    "kalpesh@123",
    "kp@gmail.com",
    "1996-10-16",
  ]);

  await connection.endAsync();

  const json = { title: "Rahul" };
  res.json(json);
});

app.get("/adduser", async (req, res) => {
  try {
    const input = req.query;
    await dbread.addRecord(input);
    const json = { message: "Success" };
    res.json(json);
  } catch (err) {
    const json = { message: "error" };
    res.json(json);
  }
});
app.listen(3000);
