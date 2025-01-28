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

