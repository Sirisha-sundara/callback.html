document.addEventListener("DOMContentLoaded", function() {
  const doubleButton = document.getElementById("doubleButton");
  const numberInput = document.getElementById("numberInput");
  const resultParagraph = document.getElementById("result");

  // Define the higher-order function
  function higherOrderFunction(num, callback) {
    return callback(num);
  }

  // Define the callback function
  const doubleNumber = x => x * 2;

  // Event listener for button click
  doubleButton.addEventListener("click", function() {
    const num = parseFloat(numberInput.value);
    if (!isNaN(num)) {
      const doubled = higherOrderFunction(num, doubleNumber);
      resultParagraph.textContent = `Double of ${num} is ${doubled}.`;
    } else {
      resultParagraph.textContent = "Please enter a valid number.";
    }
  });
});
