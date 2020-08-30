const fs = require("fs");

const Promise = require("bluebird");
Promise.promisifyAll(fs); //promicification of fs module

let readDemo = () => {
  //fs.readFile()

  const filePath = "C:/Users/WAGH/Desktop/demo/1.txt";
  //Promice
  const mypromice = fs.readFileAsync(filePath, { encoding: "utf-8" });

  //Success
  mypromice.then((data) => {
    console.log(data);
  });

  mypromice.catch((err) => {
    console.log(err);
  });
};

readDemo();
