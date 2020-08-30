const fs = require("fs");

let readDemo = () => {
  try {
    console.log("rahul.file.whatsapp");
    /**
     * Blocking Element
     *
     *  fs.readFileSync();
     */

    //Non Blocking

    const path = "./2.txt";
    fs.readFile(path, { encoding: "utf-8" }, (err, data) => {
      console.log(data);
      if (err) {
        console.log(err);
      } else {
        console.log(data);
      }
    });
  } catch (err) {
    console.log(err);
  }
};

let readDemo1 = () => {
  try {
    console.log("rahul.file.whatsapp");
    const path = "C:/Users/WAGH/Desktop/bESTOFBESTNEW.txt";
    const filedata = fs.readFileSync(path, { encoding: "utf-8" });
    console.log(filedata);
  } catch (err) {
    console.log(err);
  }
};

let writeDemo = () => {
  console.log("Write A file");
};

let hello = (n1, n2) => {
  try {
    let sum = n1 + n2;
    return sum;
  } catch (err) {
    console.log(err);
  }
};

module.exports = { readDemo1, writeDemo };
