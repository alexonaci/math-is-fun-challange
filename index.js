const myFunction = () => {
  let firstOperand = Number(document.getElementById("firstOperand").value);
  let secondOperand = Number(document.getElementById("secondOperand").value);
  let thirdOperand = Number(document.getElementById("thirdOperand").value);
  let fourthOperand = Number(document.getElementById("fourthOperand").value);
  let res, res1, res2;
  const operation = document.querySelectorAll("select");
  //   ---------------------------------------------->
  if (
    // check if 000 :
    operation[0].value !== "multiplication" &&
    operation[0].value !== "division" &&
    operation[1].value !== "multiplication" &&
    operation[1].value !== "division" &&
    operation[2].value !== "multiplication" &&
    operation[2].value !== "division"
  ) {
    if (operation[0].value == "addition") {
      res = firstOperand + secondOperand;
    } else if (operation[0].value == "substraction") {
      res = firstOperand - secondOperand;
    }
    if (operation[1].value == "addition") {
      res = res + thirdOperand;
    } else if (operation[1].value == "substraction") {
      res = res - thirdOperand;
    }
    if (operation[2].value == "addition") {
      res = res + fourthOperand;
    } else if (operation[2].value == "substraction") {
      res = res - fourthOperand;
    }
  } else if (
    // check if 111
    (operation[0].value == "multiplication" ||
      operation[0].value == "division") &&
    (operation[1].value == "multiplication" ||
      operation[1].value == "division") &&
    (operation[2].value == "multiplication" || operation[2].value == "division")
  ) {
    if (operation[0].value == "multiplication") {
      res = firstOperand * secondOperand;
    } else if (operation[0].value == "division") {
      res = firstOperand / secondOperand;
    }
    if (operation[1].value == "multiplication") {
      res = res * thirdOperand;
    } else if (operation[1].value == "division") {
      res = res / thirdOperand;
    }
    if (operation[2].value == "multiplication") {
      res = res * fourthOperand;
    } else if (operation[2].value == "division") {
      res = res / fourthOperand;
    }
  } else if (
    // check if 110
    (operation[0].value == "multiplication" ||
      operation[0].value == "division") &&
    (operation[1].value == "multiplication" ||
      operation[1].value == "division") &&
    (operation[2].value !== "multiplication" ||
      operation[2].value !== "division")
  ) {
    if (operation[0].value == "multiplication") {
      res = firstOperand * secondOperand;
    } else if (operation[0].value == "division") {
      res = firstOperand / secondOperand;
    }
    if (operation[1].value == "multiplication") {
      res = res * thirdOperand;
    } else if (operation[1].value == "division") {
      res = res / thirdOperand;
    }
    if (operation[2].value == "addition") {
      res = res + fourthOperand;
    } else if (operation[2].value == "substraction") {
      res = res - fourthOperand;
    }
  } else if (
    // check if 101
    (operation[0].value == "multiplication" ||
      operation[0].value == "division") &&
    (operation[1].value !== "multiplication" ||
      operation[1].value !== "division") &&
    (operation[2].value == "multiplication" || operation[2].value == "division")
  ) {
    if (operation[0].value == "multiplication") {
      res = firstOperand * secondOperand;
    } else if (operation[0].value == "division") {
      res = firstOperand / secondOperand;
    }
    if (operation[2].value == "multiplication") {
      res1 = thirdOperand * fourthOperand;
    } else if (operation[2].value == "division") {
      res1 = thirdOperand / fourthOperand;
    }
    if (operation[1].value == "addition") {
      res = res + res1;
    } else if (operation[1].value == "substraction") {
      res = res - res1;
    }
  } else if (
    // check if 011
    (operation[0].value !== "multiplication" ||
      operation[0].value !== "division") &&
    (operation[1].value == "multiplication" ||
      operation[1].value == "division") &&
    (operation[2].value == "multiplication" || operation[2].value == "division")
  ) {
    if (operation[1].value == "multiplication") {
      res1 = secondOperand * thirdOperand;
    } else if (operation[1].value == "division") {
      res1 = secondOperand / thirdOperand;
    }
    if (operation[2].value == "multiplication") {
      res2 = res1 * fourthOperand;
    } else if (operation[2].value == "division") {
      res2 = res1 / fourthOperand;
    }
    if (operation[0].value == "addition") {
      res = firstOperand + res2;
    } else if (operation[0].value == "substraction") {
      res = firstOperand - res2;
    }
  } else if (
    // check if 100
    (operation[0].value == "multiplication" ||
      operation[0].value == "division") &&
    (operation[1].value !== "multiplication" ||
      operation[1].value !== "division") &&
    (operation[2].value !== "multiplication" ||
      operation[2].value !== "division")
  ) {
    if (operation[0].value == "multiplication") {
      res = firstOperand * secondOperand;
    } else if (operation[0].value == "division") {
      res = firstOperand / secondOperand;
    }
    if (operation[1].value == "addition") {
      res = res + thirdOperand;
    } else if (operation[1].value == "substraction") {
      res = res - thirdOperand;
    }
    if (operation[2].value == "addition") {
      res = res + fourthOperand;
    } else if (operation[2].value == "substraction") {
      res = res - fourthOperand;
    }
  } else if (
    // check if 010
    (operation[0].value !== "multiplication" ||
      operation[0].value !== "division") &&
    (operation[1].value == "multiplication" ||
      operation[1].value == "division") &&
    (operation[2].value !== "multiplication" ||
      operation[2].value !== "division")
  ) {
    if (operation[1].value == "multiplication") {
      res = secondOperand * thirdOperand;
    } else if (operation[1].value == "division") {
      res = secondOperand / thirdOperand;
    }
    if (operation[0].value == "addition") {
      res = firstOperand + res;
    } else if (operation[0].value == "substraction") {
      res = firstOperand - res;
    }
    if (operation[2].value == "addition") {
      res = res + fourthOperand;
    } else if (operation[2].value == "substraction") {
      res = res - fourthOperand;
    }
  } else if (
    // check if 001
    (operation[0].value !== "multiplication" ||
      operation[0].value !== "division") &&
    (operation[1].value !== "multiplication" ||
      operation[1].value !== "division") &&
    (operation[2].value == "multiplication" || operation[2].value == "division")
  ) {
    if (operation[2].value == "multiplication") {
      res = thirdOperand * fourthOperand;
    } else if (operation[2].value == "division") {
      res = thirdOperand / fourthOperand;
    }
    if (operation[0].value == "addition") {
      res1 = firstOperand + secondOperand;
    } else if (operation[0].value == "substraction") {
      res1 = firstOperand - secondOperand;
    }
    if (operation[1].value == "addition") {
      res = res1 + res;
    } else if (operation[1].value == "substraction") {
      res = res1 - res;
    }
  }
  document.getElementById("result").innerHTML = res;
};
