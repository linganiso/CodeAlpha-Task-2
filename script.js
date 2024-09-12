// Get the display element from the HTML document
let displayElement = document.getElementById('display');

// State to track if we should insert a left or right parenthesis
let isLeftParenthesisNext = true;

/**
 * Function to append a character to the display
 * @param {string} value - The value to be appended to the display
 */
function appendToDisplay(value) {
  displayElement.textContent += value; // Add the value to the display's current text
}

/**
 * Function to clear the display
 */
function clearDisplay() {
  displayElement.textContent = ''; // Set display text to an empty string
}

/**
 * Function to delete the last character from the display
 */
function deleteLast() {
  // Remove the last character from the display's text
  displayElement.textContent = displayElement.textContent.slice(0, -1);
}

/**
 * Function to toggle between left and right parenthesis
 */
function toggleParenthesis() {
  if (isLeftParenthesisNext) {
    appendToDisplay('('); // Append left parenthesis
  } else {
    appendToDisplay(')'); // Append right parenthesis
  }
  isLeftParenthesisNext = !isLeftParenthesisNext; // Toggle state
}

/**
 * Function to calculate and display the result of the expression
 */
function calculateResult() {
  try {
    let expression = displayElement.textContent;
    // Replace percentage symbol with appropriate calculation
    expression = expression.replace(/(\d+)%/, (match, p1) => p1 / 100);
    // Evaluate the mathematical expression in the display
    displayElement.textContent = eval(expression);
  } catch {
    // If there's an error (e.g., invalid expression), display "Error"
    displayElement.textContent = 'Error';
  }
}
