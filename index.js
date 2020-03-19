const myFunction = () => {
  let firstOperand = Number(document.getElementById("firstOperand").value);
  let secondOperand = Number(document.getElementById("secondOperand").value);
  let thirdOperand = Number(document.getElementById("thirdOperand").value);
  let fourthOperand = Number(document.getElementById("fourthOperand").value);
  let sum = firstOperand + secondOperand;
  document.getElementById("result").innerHTML = sum;
  console.log(typeof sum);
  console.log(secondOperand);
};
