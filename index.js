const inputElementsValidState = {};
const errMsgView = document.querySelector(".row article ul ul div");
const resultView = document.querySelector(".row:last-child article ul ul div");
const calculateButton = document.querySelector('button');

const checkAllInputElementsOk = () => {
    let allOK = true;
    Object.values(inputElementsValidState).forEach((state) => {
        if (state === "invalid") {
            allOK = false;
        }
    })
    return allOK;
}

const validateInputIsNumber = (value) => {
    const valNumber = parseInt(value);
    if (valNumber == value) {
        return true;
    } else {
        return false;
    }
}

const alertIfNotANumber = ({ target }) => {
    if (!validateInputIsNumber(target.value)) {
        target.classList.add('inputNotValid');
        inputElementsValidState[target.id] = 'invalid';
    } else {
        target.classList.remove('inputNotValid');
        inputElementsValidState[target.id] = 'valid';
    }
    if (checkAllInputElementsOk()) {
        calculateButton.classList.remove('hideElement');
        errMsgView.innerText = 'All clear. No Errors ! :]';
        errMsgView.classList.remove('inputNotValid');

    } else {
        calculateButton.classList.add('hideElement');
        errMsgView.innerText = 'All input fields should have valid numbers (inlcuding 0)';
        errMsgView.classList.add('inputNotValid');
    }
}

const getOperationSimbol = (operationValue) => {
    let operation = '';
    switch (operationValue) {
        case 'addition':
            operation = '+';
            break;
        case 'substraction':
            operation = '-';
            break;
        case 'division':
            operation = '/';
            break;
        case 'multiplication':
            operation = '*';
            break;
    }
    return operation;
}

const calculateResult = () => {
    let resultString = '';
    const operandsAndOperations = [...document.querySelectorAll("input, select")];
    operandsAndOperations.forEach((element) => {
        if (element.tagName === "INPUT") {
            resultString += parseInt(element.value);
        } else {           // operation
            const operation = getOperationSimbol(element.value);
            resultString += operation;
        }
    })
    return eval(resultString);
}

const displayResult = (view, result) => {
    view.innerText = result;
}

const inputElements = [...document.getElementsByTagName('input')];
inputElements.forEach(field => {
    field.value = '0';
    field.addEventListener("input", () => {
        alertIfNotANumber(event);
    })
})

const calculateAndDisplayResult = () => {
    const result = calculateResult();
    displayResult(resultView, result);

}

calculateButton.addEventListener("click", calculateAndDisplayResult);


