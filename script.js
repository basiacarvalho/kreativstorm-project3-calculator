// function clearAllDisplay() {
//   display.value = "";
// }


// clearAllDisplay
// clearLastDisplayElement


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

let displayValue = "0";

// Function that shows on the calculator display what the user clicked
function showOnDisplay(input) {
  display.value += input;
  displayValue = display.value;
}