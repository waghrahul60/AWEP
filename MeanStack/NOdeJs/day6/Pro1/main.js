//import mysql
const Promise = require("bluebird");
const mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

//express
const express = require("express");
const app = express();

const dbread = require("./src/db.read");

//Internam Modules
//const dbConfig = require("./config/dbConfig");
//app.get("/", (req, res) => res.send("Rahul Wagh"));

//Database Import
const config = require("./config/dbConfig");
const dbRead = require("./src/db.read");

app.get("/", async (req, res) => {
  try {
    const connection = mysql.createConnection(config.DB_CONFIG);

    await connection.connectAsync();

    await connection.endAsync();

    const json = { message: "Hurrrayyy, Record Added, Lets Celebrate!!" };
    res.json(json);
  } catch (err) {
    const json = { message: "Error Occured!!" };
    res.json(json);
  }
});

app.get("/alluser", async (req, res) => {
  try {
    const result = await dbread.readAllUserData();
    res.json(result);
  } catch (err) {
    res.json({ message: "error" });
  }
});

app.listen("3000");
