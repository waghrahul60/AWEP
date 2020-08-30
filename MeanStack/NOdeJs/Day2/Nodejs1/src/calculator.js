class Calculator {
  add(n1, n2) {
    return n1 + n2;
  }

  substract(n1, n2) {
    return n1 - n2;
  }
}

let obj = new Calculator();
let addition = obj.add(2, 7);

console.log(addition);
