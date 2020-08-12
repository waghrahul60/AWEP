const defaultRsult = 0;
let currentResult = defaultRsult;

function add(num1, num2) {
  const result = num1 + num2;
  //alert("The result is " + result);   //Alert Box
  return result;
}

currentResult = add(8, 9);

let calculationDescription = `(${defaultRsult}+10) * 3 / 2 - 1`;

outputResult(currentResult, calculationDescription);
