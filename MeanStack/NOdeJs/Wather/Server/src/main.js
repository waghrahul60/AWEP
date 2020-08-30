const http = require("http");
const mod = require("./my.module1");

http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    const myresponse = JSON.stringify(mod.list);
    res.end(myresponse);
  })
  .listen(5602);
