// Basic Math's function for addition
function add(number1, number2) {
  return number1 + number2;
}

// Basic Math's function for substraction
function substract(number1, number2) {
  return number1 - number2;
}

// Basic Math's function for multiplication
function multiply(number1, number2) {
  return number1 * number2;
}

// Basic Math's function for division
function divide(number1, number2) {
  return number1 / number2;
}

// Function that takes 2 numbers and according to the operator calls the correct basic Math's function
function operate(operator, number1, number2) {
  if (operator === "+") {
    return add(number1, number2);
  } else if (operator === "-") {
    return substract(number1, number2);
  } else if (operator === "*") {
    return multiply(number1, number2);
  } else if (operator === "/") {
    return divide(number1, number2);
  } else {
    throw new Error("Unrecognized operator.");
  };
}

const display = document.querySelector(".calculator__display");
let displayValue = "";
let userFirstInput = null;
let operator = null;
let showingResult = false;

// Function that shows on the calculator display what the user clicked and after performing a calculation clears the calculator display
function showOnDisplay(input) {
  if (showingResult === true || operator !== null) {
    display.value = "";
    showingResult = false;
  } 
  display.value += input;
  displayValue = display.value;
}

// Making the calculator work when the user presses "="
function calculate() {
  if (operator !== null  && userFirstInput !== null && displayValue !== "") {
    displayValue = operate(operator, userFirstInput, Number(displayValue));
    display.value = displayValue;
    showingResult = true;
    operator = null;
    userFirstInput = null;
  }  
}

// Storing the 1st  input value into a calculator when a user presses an operator
function setOperator(chosenOperator) {
  operator = chosenOperator;
  userFirstInput = Number(displayValue);
}

// Clearing all the calculator display using the C button
function clearAllDisplay() {
  display.value = "";
}

// Clearing the last display element
function clearLastDisplayElement() {
  displayValue = displayValue.slice(0, -1);
  display.value = displayValue;
}

