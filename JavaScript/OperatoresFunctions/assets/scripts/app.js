const defaultRsult = 0;
let currentResult = defaultRsult;

function add() {
  currentResult = currentResult + userInput.value;
  outputResult(currentResult, "");
}

addBtn.addEventListener("click", add);
