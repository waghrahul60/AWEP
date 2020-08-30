const fs = require("fs");

const Promise = require("bluebird");
Promise.promisifyAll(fs); //promicification of fs module

let readDemo = () => {
  //fs.readFile()

  const filePath = "C:/Users/WAGH/Desktop/demo/1.txt";
  fs.readFileAsync(filePath, { encoding: "utf-8" })
    .then((data) => {
      console.log(data);

      const filePath2 = "C:/Users/WAGH/Desktop/demo/2.txt";
      fs.readFileAsync(filePath2, { encoding: "utf-8" });
    })
    .then((data1) => {
      console.log(data1);
    });
};

readDemo();
