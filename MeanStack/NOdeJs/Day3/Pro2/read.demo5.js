const fs = require("fs");

const Promise = require("bluebird");
Promise.promisifyAll(fs); //promicification of fs module

let readDemo = async () => {
  //fs.readFile()

  const filePath = "C:/Users/WAGH/Desktop/demo/1.txt";
  const data1 = await fs.readFileAsync(filePath, { encoding: "utf-8" });
  console.log(data1);

  const filePath2 = "C:/Users/WAGH/Desktop/demo/2.txt";
  const data2 = await fs.readFileAsync(filePath2, { encoding: "utf-8" });
  console.log(data2);

  const filePath3 = "C:/Users/WAGH/Desktop/demo/3.txt";
  const data3 = await fs.readFileAsync(filePath3, { encoding: "utf-8" });
  console.log(data3);
};

readDemo();
