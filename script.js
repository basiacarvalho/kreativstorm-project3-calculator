const display = document.querySelector(".calculator__display");

let displayValue = 0;
let userFirstInput = null;
let operator = null;
let shouldClearDisplay = false;
let lastButtonPressed = null;

function calculate() {
  if (operator !== null  && userFirstInput !== null && display.value !== "") {
    displayValue = operate(operator, Number(userFirstInput), displayValue);
    const numberOfDigitsLeftAfterDot = calculateSpaceForDecimalDigits();
    if (typeof(displayValue) === "number") {
      display.value = Number(displayValue.toFixed(numberOfDigitsLeftAfterDot));
    } else {
      display.value = displayValue;
    }
    shouldClearDisplay = true;
    operator = null;
    userFirstInput = null;
  }
}

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

function add(number1, number2) {
  return number1 + number2;
}

function substract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  return number1 / number2;
}

function calculateSpaceForDecimalDigits() {
  const positionOfDotInResult = displayValue.toString().indexOf('.');
  const maxNumberOfDigitsOnDisplay = 13;
  const result = maxNumberOfDigitsOnDisplay - positionOfDotInResult - 1;
  if (result > 5) {
    return 5;
  } else if (result < 0) {
    return 0;
  }
  return result;
}

function showOnDisplay(input) {
  if (display.value.length > 12 && shouldClearDisplay !== true) {
    return;
  }
  lastButtonPressed = input;
  clearDisplayWhenNecessary(input);
  if (input === "." && display.value === "") {
    display.value = "0";
  }
  if (input !== "." || !display.value.includes('.')) {
    display.value += input;
    displayValue = Number(display.value);
  }
}

function clearDisplayWhenNecessary(input) {
  if (shouldClearDisplay === true || (display.value === "0" && input !== ".")) {
    display.value = "";
    displayValue = 0;
    shouldClearDisplay = false;
  } 
}

function setOperator(chosenOperator) {
  const operators = ["/", "*", "-", "+"];
  if (!operators.includes(lastButtonPressed)) {
    calculate();
  }
  operator = chosenOperator;
  userFirstInput = displayValue;
  shouldClearDisplay = true;
  lastButtonPressed = chosenOperator;
}

function clearAllDisplay() {
  lastButtonPressed = null;
  display.value = "";
  displayValue = 0;
  userFirstInput = null;
  operator = null;
  shouldClearDisplay = false;
}

function clearLastDisplayElement() {
  lastButtonPressed = 'DEL'
  if (shouldClearDisplay !== true) {
    display.value = display.value.slice(0, -1);
    displayValue = Number(display.value);
  } 
}

document.addEventListener("keydown", (event) => {
  const regularButtons = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
  const operators = ["/", "*", "-", "+"];
  const calculationButtons = ["Enter", "="];
  if (regularButtons.includes(event.key)) {
    showOnDisplay(event.key);
  } else if (operators.includes(event.key)) {
    setOperator(event.key);
  } else if (calculationButtons.includes(event.key)) {
    calculate();
  } else if ((event.key === "Delete")) {
    clearAllDisplay();
  } else if ((event.key === "Backspace")) {
    clearLastDisplayElement();
  }
});
