const display = document.querySelector(".calculator__display");

let displayValue = "";
let userFirstInput = null;
let operator = null;
let shouldClearDisplay = false;
let lastButtonPressed = null;

function calculate() {
  if (operator !== null  && userFirstInput !== null && displayValue !== "") {
    displayValue = operate(operator, Number(userFirstInput), Number(displayValue));
    const numberOfDigitsLeftAfterDot = calculateSpaceForDecimalDigits();
    display.value = Number(displayValue.toFixed(numberOfDigitsLeftAfterDot));
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
  return maxNumberOfDigitsOnDisplay - positionOfDotInResult - 1;
}

// Function that shows on the calculator display what the user clicked and after performing a calculation clears the calculator display
function showOnDisplay(input) {
  if (displayValue.length > 12) {
    return;
  }
  lastButtonPressed = input;
  clearDisplayWhenNecessary();
  if (input !== "." || !displayValue.includes('.')) {
    display.value += input;
    displayValue = display.value;
  }
}

function clearDisplayWhenNecessary() {
  if (shouldClearDisplay === true) {
    display.value = "";
    shouldClearDisplay = false;
  } 
}

// Storing the 1st  input value into a calculator when a user presses an operator
function setOperator(chosenOperator) {
  if (!["/", "*", "-", "+"].includes(lastButtonPressed)) {
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
  displayValue = "";
  userFirstInput = null;
  operator = null;
  shouldClearDisplay = false;
}

function clearLastDisplayElement() {
  lastButtonPressed = 'DEL'
  if (shouldClearDisplay !== true) {
    displayValue = displayValue.slice(0, -1);
    display.value = displayValue;
  } 
}

document.addEventListener("keydown", (event) => {
  if (event.key === "0") {
    showOnDisplay("0");
  } else if ((event.key === "1")) {
    showOnDisplay("1");
  } else if ((event.key === "2")) {
    showOnDisplay("2");
  } else if ((event.key === "3")) {
    showOnDisplay("3");
  } else if ((event.key === "4")) {
    showOnDisplay("4");
  } else if ((event.key === "5")) {
    showOnDisplay("5");
  } else if ((event.key === "6")) {
    showOnDisplay("6");
  } else if ((event.key === "7")) {
    showOnDisplay("7");
  } else if ((event.key === "8")) {
    showOnDisplay("8");
  } else if ((event.key === "9")) {
    showOnDisplay("9");
  } else if ((event.key === ".")) {
    showOnDisplay('.');
  } else if ((event.key === "/")) {
    setOperator('/');
  } else if ((event.key === "*")) {
    setOperator('*');
  } else if ((event.key === "-")) {
    setOperator('-');
  } else if ((event.key === "+")) {
    setOperator('+');
  } else if ((event.key === "=")) {
    calculate();
  } else if ((event.key === "Enter")) {
    calculate();
  } else if ((event.key === "Delete")) {
    clearAllDisplay();
  } else if ((event.key === "Backspace")) {
    clearLastDisplayElement();
  }
});

