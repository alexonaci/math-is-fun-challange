const validInput = {};
const errorMessage = document.querySelector(".row article ul ul div");
const error = document.querySelector(".row article ul ul");
const resultMessage = document.querySelector(".row:last-child article ul ul div");
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
    } else {
        errorMessage.classList.remove("invalidInput");
        errorMessage.classList.add("hideElement");
        error.classList.add("hideElement");
    }
}

const inputs = [...document.getElementsByTagName("input")];

inputs.forEach(field => {
    field.value = '0';
    field.addEventListener("input", () => {
        inputError(event);
    })
})

