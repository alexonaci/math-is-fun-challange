const validInput = {};
const errorMessage = document.querySelector(".row article ul ul div");
const error = document.querySelector(".row article ul ul");
const resultMessage = document.querySelector(".row:last-child article ul ul div");
const result = document.querySelector(".row:last-child article ul ul");
const calculateBtn = document.querySelector("button");

const validateInputNumber = (number) => {
    const value = parseInt(number);
    if(value == number) {
        return true;
    } else return false;
}

const validateAllInput = () => {
    let ok = true;
    Object.values(validInput).forEach(value => {
        if(value === "invalid") {
            ok = false;
        }
    });

    return ok;
}

const inputError = ({target}) => {
    if(validateInputNumber(target.value)) {
        target.classList.remove("invalidInput");
        validInput[target.id] = "valid";
    } else {
        target.classList.add("invalidInput");
        validInput[target.id] = "invalid";
    }

    if(!validateAllInput()) {
        errorMessage.innerText = "ERROR! Input not valid (use numbers only)!";
        errorMessage.classList.add("invalidInput");
        error.classList.remove("hideElement");
        errorMessage.classList.remove("hideElement");
        resultMessage.classList.add("hideElement");
        result.classList.add("hideElement");
    } else {
        errorMessage.classList.remove("invalidInput");
        errorMessage.classList.add("hideElement");
        error.classList.add("hideElement");
        resultMessage.classList.remove("hideElement");
        result.classList.remove("hideElement");
    }
}

const inputs = [...document.getElementsByTagName("input")];

inputs.forEach(field => {
    field.value = '0';
    field.addEventListener("input", () => {
        inputError(event);
    })
})

const opSymbol = (value) => {
    let operation = "";

    switch (value) {
        case "addition":
            operation = "+";
            break;
        case "substraction":
            operation = "-";
            break;
        case "multiplication":
            operation = "*";
            break;
        case "division":
            operation = "/";
            break;
    }

    return operation;
}

const calculate = () => {
    let result = "";
    const getAllInputs = [...document.querySelectorAll("input, select")];
    console.log(getAllInputs);

    getAllInputs.forEach(element => {
        if(element.tagName === "SELECT") {
            const operation = opSymbol(element.value);
            result += operation;          
        } else {
            result += parseInt(element.value);
        }
    })

    return eval(result);
}

const display = (message, result) => {
    message.innerText = result;
    resultMessage.classList.add("validResult");
}

const calculateAndDisplay = () => {
    const result = calculate();
    display(resultMessage, result);
}

calculateBtn.addEventListener("click", calculateAndDisplay);