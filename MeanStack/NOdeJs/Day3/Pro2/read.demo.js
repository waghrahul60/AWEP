// READ THE FILE
const fs = require("fs");

let readDemo = () => {
  //Reading File 1
  const filePath = "C:/Users/WAGH/Desktop/bESTOFBESTNEW.txt";
  fs.readFile(filePath, { encoding: "utf-8" }, (err, data) => {
    console.log("1", data);
  });

  //Reading File 2
  const filePath1 = "C:/Users/WAGH/Desktop/bESTOFBESTNEW.txt";
  fs.readFile(filePath1, { encoding: "utf-8" }, (err, data) => {
    console.log("2", data);
  });

  //Reading File 3
  const filePath2 = "C:/Users/WAGH/Desktop/bESTOFBESTNEW.txt";
  fs.readFile(filePath2, { encoding: "utf-8" }, (err, data) => {
    console.log("3", data);
  });
};

readDemo();
