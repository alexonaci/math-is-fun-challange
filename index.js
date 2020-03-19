const myFunction = () => {
  let firstOperand = Number(document.getElementById("firstOperand").value);
  let secondOperand = Number(document.getElementById("secondOperand").value);
  let thirdOperand = Number(document.getElementById("thirdOperand").value);
  let fourthOperand = Number(document.getElementById("fourthOperand").value);
  let sum = firstOperand + secondOperand;
  document.getElementById("result").innerHTML = sum;
  //   --------------------------------->
  const allSelectElements = document.querySelectorAll("select");
  for (let i = 0; i < allSelectElements.length; i++) {
    console.log(allSelectElements[i].value, "Asta");
  }
};
