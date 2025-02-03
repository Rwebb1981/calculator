//Basic maths functions
function add(a, b) {
    return a + b; 
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b == 0) {
        return NaN
    }
    return a / b;
}

console.log (add(3, 5));
console.log (subtract(10, 5));
console.log (multiply (2, 7));
console.log (divide(20, 10));
console.log (divide(20, 0));

//Create variables
let input = '';
let firstNumber = '';
let operator = '';
let secondNumber = '';

//Operate function
function operate (operator, num1, num2) {
    switch (operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
        default:
            return "Invalid operator";
    }
}

console.log(operate('+', 5, 3));
console.log(operate('*', 4, 2));

//Selecting the display elements
const operationDisplay = document.querySelector(".operation"); 
const outputDisplay = document.querySelector(".output"); 

//Selecting the buttons container correctly
const buttonsContainer = document.querySelector(".buttons");

//Listen for clicks on the buttons
buttonsContainer.addEventListener("click", function (event) {
    const target = event.target;

    //If a number button is clicked
    if (target.classList.contains("numberbtn")) {
        appendToOperation(target.textContent);
    }

    //If an operator button is clicked
    if (target.classList.contains("operationbtn")) {
        appendToOperation(target.textContent);
    }

    //If the equals button is clicked
    if (target.classList.contains("equalsbtn")) {
        calculateResult();
    }
});

//Function to append numbers and operators to the operation display
function appendToOperation(value) {
    if (operationDisplay.textContent === "0") {
        operationDisplay.textContent = value; // Replace the initial "0"
    } else {
        operationDisplay.textContent += value;
    }
}

//Function to evaluate the expression manually
function calculateResult() {
    const expression = operationDisplay.textContent;
    let result;
    
    //Check if there's an operator present
    if (expression.includes('+')) {
        const parts = expression.split('+');
        result = operate('+', parseFloat(parts[0]), parseFloat(parts[1]));
    } else if (expression.includes('-')) {
        const parts = expression.split('-');
        result = operate('-', parseFloat(parts[0]), parseFloat(parts[1]));
    } else if (expression.includes('*')) {
        const parts = expression.split('*');
        result = operate('*', parseFloat(parts[0]), parseFloat(parts[1]));
    } else if (expression.includes('/')) {
        const parts = expression.split('/');
        result = operate('/', parseFloat(parts[0]), parseFloat(parts[1]));
    }

    //Display the result
    outputDisplay.textContent = result !== undefined ? result : "Error";
}

//Function to clear both displays when "AC" is clicked
document.querySelector(".acbtn").addEventListener("click", function () {
    operationDisplay.textContent = "0";
    outputDisplay.textContent = "0";
});

//Function to delete the last number (i.e. backspace function)
document.addEventListener("DOMContentLoaded", function() {
    const operationScreen = document.querySelector(".operation"); // Targeting the operation display
    const deleteBtn = document.querySelector(".deletebtn");

    deleteBtn.addEventListener("click", function() {
        let currentText = operationScreen.textContent;

        if (currentText.length > 1) {
            operationScreen.textContent = currentText.slice(0, -1); // Remove last character
        } else {
            operationScreen.textContent = "0"; // Reset to 0 if empty
        }
    });
});

//Add keyboard support for all functions
document.addEventListener("keydown", function(event) {
    const operationScreen = document.querySelector(".operation");

    let key = event.key;

    //Allow numbers (0-9) and operators (+, -, *, /, .)
    if (/[\d+\-*/.]/.test(key)) {
        if (operationScreen.textContent === "0") {
            operationScreen.textContent = key; // Replace 0 with first digit
        } else {
            operationScreen.textContent += key; // Append to operation
        }
    }

    //Handle Enter key (calculate result)
    if (key === "Enter" || key === "=") {
        event.preventDefault(); // Prevent form submission (if applicable)
        calculateResult(); // Call your calculation function
    }

    //Handle Backspace (Delete last character)
    if (key === "Backspace") {
        let currentText = operationScreen.textContent;
        if (currentText.length > 1) {
            operationScreen.textContent = currentText.slice(0, -1);
        } else {
            operationScreen.textContent = "0";
        }
    }

    //Handle Clear (Escape key)
    if (key === "Escape") {
        operationScreen.textContent = "0"; // Clear the screen
    }
});