let calculateBtn = document.getElementsByTagName('button')[0];

let showResult = document.querySelector(' div:nth-child(6) > article > ul > li:nth-child(4) > div > div > ul > li:nth-child(3) > div');

let errorMessage = document.querySelector('div:nth-child(5) > article > ul > li:nth-child(4) > div > div > ul > li:nth-child(3) > div')

let result;



calculateBtn.addEventListener('click', function () {

    let valueInputOne = document.getElementById('firstOperand').value;
    console.log("input one value is ", valueInputOne)
    let valueInputTwo = document.getElementById('secondOperand').value;
    let valueInputThree = document.getElementById('thirdOperand').value;
    let valueInputFour = document.getElementById('fourthOperand').value;

    let selectOne = document.getElementsByName('operations')[0].value;
    let selectTwo = document.getElementsByName('operations')[1].value;
    let selectThree = document.getElementsByName('operations')[2].value;


    getErrorMessageOnOperands(valueInputOne, valueInputTwo, selectOne);
    if(getErrorMessageOnOperands(valueInputOne, valueInputTwo, selectOne)){
        return;
    }
    let resultGroup1 = operations(valueInputOne, valueInputTwo, selectOne);

    getErrorMessageOnOperands(resultGroup1, valueInputThree, selectTwo);
    if(getErrorMessageOnOperands(resultGroup1, valueInputThree, selectTwo)){
        return;
    }
    let resultGroup2 = operations(resultGroup1, valueInputThree, selectTwo);

    getErrorMessageOnOperands(resultGroup2, valueInputFour, selectThree);
    if(getErrorMessageOnOperands(resultGroup2, valueInputFour, selectThree)){
        return;
    }
    let resultGroup3 = operations(resultGroup2, valueInputFour, selectThree);

    getErrorMessageOnResult(resultGroup3);


    showResult.innerHTML = resultGroup3;
    console.log('sh res is ', showResult);
});

let inputs = document.getElementsByTagName('input');
    for(let i = 0; i < inputs.length; i++){
        inputs[i].addEventListener('input', function () {
            console.log("from input event", this.value);
        
            inputTypeNumber(inputs[i]);
        });
    }

// let valueInputOneOnlyNum = document.getElementById('firstOperand');
// valueInputOneOnlyNum.addEventListener('input', function () {
//     console.log("from input event", this.value);

//     inputTypeNumber(valueInputOneOnlyNum);
// });

// let valueInputTwoOnlyNum = document.getElementById('secondOperand');
// valueInputTwoOnlyNum.addEventListener('input', function () {
//     inputTypeNumber(valueInputTwoOnlyNum);
// });

// let valueInputThreeOnlyNum = document.getElementById('thirdOperand');
// valueInputThreeOnlyNum.addEventListener('input', function () {
//     inputTypeNumber(valueInputThreeOnlyNum);
// });

// let valueInputFourthOnlyNum = document.getElementById('fourthOperand');
// valueInputFourthOnlyNum.addEventListener('input', function () {
//     inputTypeNumber(valueInputFourthOnlyNum);
// });


function inputTypeNumber(operand){
    let onlyNumbers = '';
    let numsArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    operand.value.split('').forEach(function (num) {
        console.log('num is: ', num);
        console.log(typeof (num));
        if(numsArray.indexOf(num) !== -1){
            onlyNumbers = onlyNumbers + num;
        } 
    });
    operand.value = onlyNumbers;
}


function operations(value1, value2, operator) {
    value1 = Number(value1);
    value2 = Number(value2);
    console.log(value1, value2, operator);
    if (operator === 'addition') {
        result = value1 + value2;
    } else if (operator === 'substraction') {
        result = value1 - value2;
    } else if (operator === 'division') {
        result = value1 / value2;
    } else if (operator === 'multiplication') {
        result = value1 * value2;
    }
    console.log(result);

    return result;
}

function getErrorMessageOnResult(result) {
    if (isNaN(result) === true) {
        errorMessage.innerHTML = 'The result must be a number';
    }
}

function getErrorMessageOnOperands(value1, value2, operator) {
    if (value2 === '0' && operator === 'division') {
        errorMessage.innerHTML = 'Division by 0';
        return true;
    }
    if ((value1 === '' || value1 === undefined || value1 === NaN) || (value2 === '' || value2 === undefined || value2 === NaN)) {
        // let inputsStyle = document.getElementsByTagName('input');
        // for(let i = 0; i < inputsStyle.length; i++){
        //     inputsStyle[i].style.border = "1px solid red";
        // }
        // valueInputOneOnlyNum.style.border = "1px solid red";
        errorMessage.innerHTML = 'Operands are not numbers';
        return true;
    }
}