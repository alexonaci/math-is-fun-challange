const inputElementsValidState = {};

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
        document.querySelector('button').classList.remove('hideElement');
    } else {
        document.querySelector('button').classList.add('hideElement');   
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
