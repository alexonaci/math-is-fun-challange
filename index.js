//DOM Variables 
let resultContainer = document.querySelectorAll("article div")[5];
let errorContainer = document.querySelectorAll("article div")[2];
let calculateButton = document.getElementsByClassName('btn btn-danger')[0];
let firstOperand = document.getElementById("firstOperand");
let secondOperand = document.getElementById("secondOperand");
let thirdOperand = document.getElementById("thirdOperand");
let fourthOperand =  document.getElementById("fourthOperand");

resultContainer.innerHTML = '';
errorContainer.innerHTML = '';

// Get the operation sign 

// A FOR LOOP or something to respect DRY !!!!!!!!!//////////////////////
let op = document.getElementsByName("operations");
var operationSign1 = op[0].options[op[0].selectedIndex].text;
op[0].addEventListener('change', function(event) {
    operationSign1 = op[0].options[op[0].selectedIndex].text;
});
var operationSign2 = op[1].options[op[1].selectedIndex].text;
op[1].addEventListener('change', function(event) {
    operationSign2 = op[1].options[op[1].selectedIndex].text;
});
 var operationSign3 = op[2].options[op[2].selectedIndex].text;
 op[2].addEventListener('change', function(event) {
    operationSign3 = op[2].options[op[2].selectedIndex].text;
});
   



//Calculate 



calculateButton.addEventListener('click', function() {    
    resultContainer.innerHTML = '';
    errorContainer.innerHTML = '';
    
    // A FUNCTION : DRY !!!
    if (operationSign1 == ":") {
        operationSign1 = '/'
    }
    if (operationSign2 == ":") {
        operationSign2 = '/'
    }
    if (operationSign3 == ":") {
        operationSign3 = '/'
    }

    let sum = eval (`${parseInt(firstOperand.value)}  ${operationSign1}  ${parseInt(secondOperand.value)} ${operationSign2} ${parseInt(thirdOperand.value)} ${operationSign3} ${parseInt(fourthOperand.value)}`)
    
    console.log(sum)
    if (!sum) {
       errorContainer.innerHTML = "Error!!! not a number"
    } else {
    resultContainer.innerHTML = sum;
    }
})





// CHECK IF INPUT TYPE IS NUMBER 

// NUMLOCK NUMBERS 96-105 !!!!!!!!!!!!!!!!!!!!!!

function checkIfNumber(operand) {
    operand.addEventListener("keyup", (evt)=> { 
        let ASCIICode = evt.keyCode;
        if (ASCIICode >= 48 && ASCIICode <= 57) {
        } else if (ASCIICode == 8) {
            operand.style.border = "";
            errorContainer.innerHTML = "";
        } else {
            operand.style.border = "solid red";
            errorContainer.innerHTML = 'Please insert ONLY numbers! ';
        }     
    });
}

checkIfNumber(firstOperand);
checkIfNumber(secondOperand);
checkIfNumber(thirdOperand);
checkIfNumber(fourthOperand);


