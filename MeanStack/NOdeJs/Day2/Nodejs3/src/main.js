const mod = require("./my.module1");
const http = require("http");

http
  .createServer((req, res) => {
    const text = JSON.stringify(mod);
    res.end(text);
  })
  .listen(5601);
