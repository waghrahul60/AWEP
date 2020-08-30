// READ THE FILE
const fs = require("fs");

let readDemo = () => {
  try {
    const filePath = "C:/Users/WAGH/Desktop/bESTOFBESTNEW.txt";

    const fileContent = fs.readFileSync(filePath, { encoding: "utf-8" });

    console.log(fileContent);
  } catch (err) {
    console.log("psdojlfgoo", err.message);
  }
};

readDemo();
