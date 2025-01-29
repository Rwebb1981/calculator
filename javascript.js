// Basic maths functions

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

// Create variables

let input = '';
let firstNumber = '';
let operator = '';
let secondNumber = '';

// Operate function

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