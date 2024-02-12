const display = document.querySelector(".calculator__display");

function showOnDisplay(input) {
  display.value += input;
}

function clearDisplay() {
  display.value = "";
}