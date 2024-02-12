const display = document.querySelector(".calculator__display");

function showOnDisplay(input) {
  display.value += input;
}

function clearAllDisplay() {
  display.value = "";
}

function calculate() {
  try {
    display.value = eval(display.value);
  }
  catch (error) {
    display.value = "Error";
  }
}

function clearLastDisplayElement() {

}

// clearAllDisplay
// clearLastDisplayElement
// divide
// multiply
// substract
// add
// calculate



