// READ THE FILE
const fs = require("fs");

let readDemo = () => {
  const filePath = "C:/Users/WAGH/Desktop/bESTOFBESTNEW.txt";
  fs.readFile(filePath, { encoding: "utf-8" }, (err, data) => {
    console.log(data);
  });
};
