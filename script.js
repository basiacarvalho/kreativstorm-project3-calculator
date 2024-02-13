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
    if (number2 === 0) {
      display.value = "Are you crazy?!";
      return display.value;
    } else {
      return divide(number1, number2);
    }
  } else {
    throw new Error("Unrecognized operator.");
  };
}

const display = document.querySelector(".calculator__display");
let displayValue = "";
let userFirstInput = null;
let operator = null;
let shouldClearDisplay = false;

// Function that shows on the calculator display what the user clicked and after performing a calculation clears the calculator display
function showOnDisplay(input) {
  if (displayValue.length > 12) {
    return;
  }
  if (shouldClearDisplay === true) {
    display.value = "";
    shouldClearDisplay = false;
  } 
  if (input !== "." || !displayValue.includes('.')) {
    display.value += input;
    displayValue = display.value;
  }
}

// Making the calculator work when the user presses "="
function calculate() {
  if (operator !== null  && userFirstInput !== null && displayValue !== "") {
    displayValue = operate(operator, userFirstInput, Number(displayValue));
    display.value = displayValue;
    shouldClearDisplay = true;
    operator = null;
    userFirstInput = null;
  }  
}

// Storing the 1st  input value into a calculator when a user presses an operator
function setOperator(chosenOperator) {
  calculate();
  operator = chosenOperator;
  userFirstInput = Number(displayValue);
  shouldClearDisplay = true;
}

// Clearing all the calculator display using the C button
function clearAllDisplay() {
  display.value = "";
  displayValue = "";
  userFirstInput = null;
  operator = null;
  shouldClearDisplay = false;
}

// Clearing the last display element
function clearLastDisplayElement() {
  if (shouldClearDisplay !== true) {
    displayValue = displayValue.slice(0, -1);
    display.value = displayValue;
  } 
}

