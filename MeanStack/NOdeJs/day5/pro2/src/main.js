const express = require("express");

const app = express();
//non blocking
app.get("/", (req, res) => {
  const id = req.query.id || "100";
  const username = req.query.username;
  const json = { id: 1, title: "Rahul Wagh" };
  res.json(json);
});

app.get("/search", (req, res) => {
  const json = { id: 1, title: "Kalpesh Patil" };
  res.json(json);
});

app.listen(3000);
