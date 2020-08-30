/**
 *
 *
 *
 */

require("http");
const PI = require("./my.module1"); //local/Internal/Extrnal

const mod2 = require("./my.module2");

const mod3 = require("./my.module3");

const mod4 = require("./my.module4");

console.log("I am main function");
console.log(PI);

console.log(mod2);
console.log(mod3);

console.log(mod4);
