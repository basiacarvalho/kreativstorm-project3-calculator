



// function clearAllDisplay() {
//   display.value = "";
// }

// function calculate() {
//   try {
//     display.value = eval(display.value);
//   }
//   catch (error) {
//     display.value = "Error";
//   }
// }

// function clearLastDisplayElement() {
// }

// clearAllDisplay
// clearLastDisplayElement

// calculate


// add
function add(number1, number2) {
  return number1 + number2;
}

// console.log(add(10, 5));

// substract
function substract(number1, number2) {
  return number1 - number2;
}

// console.log(substract(10, 5));

// multiply
function multiply(number1, number2) {
  return number1 * number2;
}

// console.log(multiply(10, 5));

// divide
function divide(number1, number2) {
  return number1 / number2;
}

// console.log(divide(10, 5));

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

// console.log(operate("+", 10, 5));

const display = document.querySelector(".calculator__display");

let displayValue = "0";

function showOnDisplay(input) {
  display.value += input;
  displayValue = display.value;

}