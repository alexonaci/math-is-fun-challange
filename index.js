let calculateBtn = document.getElementsByTagName('button')[0];

let resultMessage = document.querySelector(' div:nth-child(6) > article > ul > li:nth-child(4) > div > div > ul > li:nth-child(3) > div');

let errorMessage = document.querySelector('div:nth-child(5) > article > ul > li:nth-child(4) > div > div > ul > li:nth-child(3) > div')

let result;


calculateBtn.addEventListener('click', function () {
    
    // logic to erase the errors before any other calculations
    errorMessage.innerHTML = '';
    resultMessage.innerHTML = '';


    // logic to select and manipulate the input fields and dropdowns
    let valueInputOne = document.getElementById('firstOperand').value;
    let valueInputTwo = document.getElementById('secondOperand').value;
    let valueInputThree = document.getElementById('thirdOperand').value;
    let valueInputFour = document.getElementById('fourthOperand').value;

    let selectOne = document.getElementsByName('operations')[0].value;
    let selectTwo = document.getElementsByName('operations')[1].value;
    let selectThree = document.getElementsByName('operations')[2].value;


    getErrorMessageOnOperands(valueInputOne, valueInputTwo, selectOne);
    if (getErrorMessageOnOperands(valueInputOne, valueInputTwo, selectOne)) {
        return;
    }
    let resultGroup1 = operations(valueInputOne, valueInputTwo, selectOne);

    getErrorMessageOnOperands(resultGroup1, valueInputThree, selectTwo);
    if (getErrorMessageOnOperands(resultGroup1, valueInputThree, selectTwo)) {
        return;
    }
    let resultGroup2 = operations(resultGroup1, valueInputThree, selectTwo);

    getErrorMessageOnOperands(resultGroup2, valueInputFour, selectThree);
    if (getErrorMessageOnOperands(resultGroup2, valueInputFour, selectThree)) {
        return;
    }
    let resultGroup3 = operations(resultGroup2, valueInputFour, selectThree);

    getErrorMessageOnResult(resultGroup3);

    resultMessage.innerHTML = resultGroup3;
});


let inputs = document.getElementsByTagName('input');
for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('input', function () {
        inputTypeNumber(inputs[i]);
    });
};


// logic for inserting only numbers in the inputs
function inputTypeNumber(operand) {
    let onlyNumbers = '';
    let numsArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    operand.value.split('').forEach(function (num) {
        if (numsArray.indexOf(num) !== -1) {
            onlyNumbers = onlyNumbers + num;
        };
    });
    operand.value = onlyNumbers;
};

// logic to calculate the values from inputs 
function operations(value1, value2, operator) {
    value1 = Number(value1);
    value2 = Number(value2);
    if (operator === 'addition') {
        result = value1 + value2;
    } else if (operator === 'substraction') {
        result = value1 - value2;
    } else if (operator === 'division') {
        result = value1 / value2;
    } else if (operator === 'multiplication') {
        result = value1 * value2;
    }
    return result;
};


// logic to get error message on the result
function getErrorMessageOnResult(result) {
    if (isNaN(result) === true) {
        errorMessage.innerHTML = 'The result must be a number. Try again!';
    };
};


// logic to get error message on the operands
function getErrorMessageOnOperands(value1, value2, operator) {
    if (value2 === '0' && operator === 'division') {
        errorMessage.innerHTML = 'Division by 0. Try again!';
        return true;
    };
    if ((value1 === '' || value1 === undefined || value1 === NaN) || (value2 === '' || value2 === undefined || value2 === NaN)) {
        errorMessage.innerHTML = 'Operands are not numbers. Try again!';
        return true;
    }
};

