// GLOBAL VARIABLES ------------------------------------------------>
const errorMessage = document.querySelector(
    "div.row article ul li div div ul li div"
  ),
  resultMessage = document.querySelector(
    "div.row:last-of-type article ul li div div ul li div"
  );

// Declaring functions --------------------------------------------->
// Error Functions -------------------------->
const checkIfNumber = (arg1, arg2, arg3, arg4) => {
  if (isNaN(arg1) || isNaN(arg2) || isNaN(arg3) || isNaN(arg4)) {
    errorMessage.innerHTML = "Please insert only numbers !";
    return false;
  } else {
    return true;
  }
};

const checkIfZeroBegin = (arg1, arg2, arg3, arg4) => {
  if (
    (arg1[0] == 0 && arg1.length >= 2) ||
    (arg2[0] == 0 && arg2.length >= 2) ||
    (arg3[0] == 0 && thirdOperand.length >= 2) ||
    (arg4[0] == 0 && arg4.length >= 2)
  ) {
    errorMessage.innerHTML = "Numbers can't start with 0 !";
    return false;
  } else {
    return true;
  }
};

const checkIfDivide = (op, arg2, arg3, arg4) => {
  if (
    (op[0].value == "division" && arg2 == 0) ||
    (op[1].value == "division" && arg3 == 0) ||
    (op[2].value == "division" && arg4 == 0)
  ) {
    errorMessage.innerHTML = "Cant divide by 0 !";
    return false;
  } else {
    return true;
  }
};

// Calculus function -------------------------->
const calculate = (
  operation,
  res,
  res1,
  res2,
  firstNumber,
  secondNumber,
  thirdNumber,
  fourthNumber
) => {
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
      res = firstNumber + secondNumber;
    } else if (operation[0].value == "substraction") {
      res = firstNumber - secondNumber;
    }
    if (operation[1].value == "addition") {
      res = res + thirdNumber;
    } else if (operation[1].value == "substraction") {
      res = res - thirdNumber;
    }
    if (operation[2].value == "addition") {
      res = res + fourthNumber;
    } else if (operation[2].value == "substraction") {
      res = res - fourthNumber;
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
      res = firstNumber * secondNumber;
    } else if (operation[0].value == "division") {
      res = firstNumber / secondNumber;
    }
    if (operation[1].value == "multiplication") {
      res = res * thirdNumber;
    } else if (operation[1].value == "division") {
      res = res / thirdNumber;
    }
    if (operation[2].value == "multiplication") {
      res = res * fourthNumber;
    } else if (operation[2].value == "division") {
      res = res / fourthNumber;
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
      res = firstNumber * secondNumber;
    } else if (operation[0].value == "division") {
      res = firstNumber / secondNumber;
    }
    if (operation[1].value == "multiplication") {
      res = res * thirdNumber;
    } else if (operation[1].value == "division") {
      res = res / thirdNumber;
    }
    if (operation[2].value == "addition") {
      res = res + fourthNumber;
    } else if (operation[2].value == "substraction") {
      res = res - fourthNumber;
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
      res = firstNumber * secondNumber;
    } else if (operation[0].value == "division") {
      res = firstNumber / secondNumber;
    }
    if (operation[2].value == "multiplication") {
      res1 = thirdNumber * fourthNumber;
    } else if (operation[2].value == "division") {
      res1 = thirdNumber / fourthNumber;
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
      res1 = secondNumber * thirdNumber;
    } else if (operation[1].value == "division") {
      res1 = secondNumber / thirdNumber;
    }
    if (operation[2].value == "multiplication") {
      res2 = res1 * fourthNumber;
    } else if (operation[2].value == "division") {
      res2 = res1 / fourthNumber;
    }
    if (operation[0].value == "addition") {
      res = firstNumber + res2;
    } else if (operation[0].value == "substraction") {
      res = firstNumber - res2;
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
      res = firstNumber * secondNumber;
    } else if (operation[0].value == "division") {
      res = firstNumber / secondNumber;
    }
    if (operation[1].value == "addition") {
      res = res + thirdNumber;
    } else if (operation[1].value == "substraction") {
      res = res - thirdNumber;
    }
    if (operation[2].value == "addition") {
      res = res + fourthNumber;
    } else if (operation[2].value == "substraction") {
      res = res - fourthNumber;
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
      res = secondNumber * thirdNumber;
    } else if (operation[1].value == "division") {
      res = secondNumber / thirdNumber;
    }
    if (operation[0].value == "addition") {
      res = firstNumber + res;
    } else if (operation[0].value == "substraction") {
      res = firstNumber - res;
    }
    if (operation[2].value == "addition") {
      res = res + fourthNumber;
    } else if (operation[2].value == "substraction") {
      res = res - fourthNumber;
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
      res = thirdNumber * fourthNumber;
    } else if (operation[2].value == "division") {
      res = thirdNumber / fourthNumber;
    }
    if (operation[0].value == "addition") {
      res1 = firstNumber + secondNumber;
    } else if (operation[0].value == "substraction") {
      res1 = firstNumber - secondNumber;
    }
    if (operation[1].value == "addition") {
      res = res1 + res;
    } else if (operation[1].value == "substraction") {
      res = res1 - res;
    }
  }
  // display
  resultMessage.innerHTML = res;
};

// Error handling -> calculus ------------------>
// const errorHandler = (func1, func2, func3, func4) => {
//     if (func1() && func2() && func3()) {
//         func4();
//     }
// };

// Put it all together function ---------------------------------------------------->
const display = () => {
  // need both number and string values
  let firstOperand = document.getElementById("firstOperand").value,
    secondOperand = document.getElementById("secondOperand").value,
    thirdOperand = document.getElementById("thirdOperand").value,
    fourthOperand = document.getElementById("fourthOperand").value,
    firstNumber = Number(firstOperand),
    secondNumber = Number(secondOperand),
    thirdNumber = Number(thirdOperand),
    fourthNumber = Number(fourthOperand),
    res,
    res1,
    res2;
  const operation = document.querySelectorAll("select");
  // MAGIC
  const errorHandler = (
    checkIfNumber,
    checkIfZeroBegin,
    checkIfDivide,
    calculate
  ) => {
    if (
      checkIfNumber(firstNumber, secondNumber, thirdNumber, fourthNumber) &&
      checkIfZeroBegin(
        firstOperand,
        secondOperand,
        thirdOperand,
        fourthOperand
      ) &&
      checkIfDivide(operation, secondNumber, thirdNumber, fourthNumber)
    ) {
      calculate(
        operation,
        res,
        res1,
        res2,
        firstNumber,
        secondNumber,
        thirdNumber,
        fourthNumber
      );
    }
  };
  errorHandler();
};
