let display = document.getElementById('display');

// Function to append value to the display
function appendValue(value) {
  if (display.innerText === '0') {
    display.innerText = value;
  } else {
    display.innerText += value;
  }
}

// Function to clear the display
function clearDisplay() {
  display.innerText = '0';
}

// Function to delete the last character
function deleteLast() {
  display.innerText = display.innerText.slice(0, -1) || '0';
}

// Function to calculate the result
function calculate() {
  try {
    display.innerText = eval(display.innerText); // Use eval for simplicity (caution: avoid with user input in real apps)
  } catch {
    display.innerText = 'Error';
  }
}