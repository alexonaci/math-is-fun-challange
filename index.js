let button = document.getElementsByClassName("btn btn-danger")[0];
let result = document.getElementById("result");
let error = document.getElementById("error");

function isNumber(value) {
  return !isNaN(+value);
}

const formulas = {
  addition: (a, b) => a + b,
  subtraction: (a, b) => a - b,
  multiplication: (a, b) => a * b,
  division: (a, b) => a / b
};

const calculate = function() {
  const inputs = [
    "firstOperand",
    "secondOperand",
    "thirdOperand",
    "fourthOperand"
  ].map(id => +document.getElementById(id).value);
  console.log("inputs", inputs);

  if (inputs.filter(id => isNumber(id)).length !== inputs.length) {
    error.textContent = "Please complete all the fields with numbers!";
    return (result.textContent = "");
  }

  const operations = [];
  document
    .getElementsByName("operations")
    .forEach(x => operations.push(x[x.selectedIndex].value));
  console.log("operations", operations);

  const output = inputs
    .slice(1, inputs.length)
    .reduce(
      (prev, current, index) => formulas[operations[index]](prev, current),
      inputs[0]
    );
  console.log("output", output);
  
  if (output === 0 || output === Infinity) {
    error.textContent = "PLease don't multiply or divide by zero!";
    return (result.textContent = output);
  }
  error.textContent = "";
  return (result.textContent = output);
};

button.addEventListener("click", calculate);
