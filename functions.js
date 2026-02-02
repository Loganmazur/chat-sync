// functions.js

// Example 1: Simple random function
function testFunction() {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  document.getElementById("output").textContent = "Random Number: " + randomNumber;
}

// Example 2: Process user input
function handleUserInput() {
  const input = document.getElementById("userInput").value;
  document.getElementById("inputOutput").textContent = "You typed: " + input.toUpperCase();
}

// Add two numbers
function add(a, b) {
    return a + b;
}


// Event listeners
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("testBtn").addEventListener("click", testFunction);
  document.getElementById("inputBtn").addEventListener("click", handleUserInput);
});