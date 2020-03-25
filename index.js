const inputElementsValidState = {};
const errMsgView = document.querySelector(".row article ul ul div");
const resultView = document.querySelector(".row:last-child article ul ul div");
const calculateButton = document.querySelector('button');

const checkAllInputElementsOk = () => {
    let allOK = true;
    Object.values(inputElementsValidState).forEach( (state)=> {
        if (state === "invalid") {
            allOK = false;
        }
    })
    return allOK;
}

const validateInputIsNumber = (value) => {
    if (value) {
        const valNumber = parseInt(value);
        if (valNumber == value) {
            return true;
        } else {
            return false;
        }    
    } else {
        return false;
    }
}

const alertIfNotANumber = ({target}) => {
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
        errMsgView.innerText = 'All input fields whould have valid numbers (inlcuding 0)';   
        errMsgView.classList.add('inputNotValid');
    }  
}

const inputElements = document.getElementsByTagName('input');
const inputElementsArr = [...inputElements];
console.dir(inputElements);
console.dir(inputElementsArr);
inputElementsArr.forEach(field => {
    field.addEventListener("input", () => {
        alertIfNotANumber(event);
    } )
})

