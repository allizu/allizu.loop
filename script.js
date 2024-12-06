function calculateResults() {
  let number = document.getElementById('number').value;
  let factorialResult = 1;
  let sumResult = 0;
  let averageResult = 0;

  // Factorial calculation (while loop)
  let i = 1;
  while (i <= number) {
    factorialResult *= i;
    i++;
  }

  // Sum calculation (do-while loop)
  let j = 1;
  do {
    sumResult += j;
    j++;
  } while (j <= number);

  // Average calculation (for loop)
  for (let k = 1; k <= number; k++) {
    averageResult += k;
  }
  averageResult /= number;

  // Display the results
  let results = document.getElementById('results');
  results.innerHTML = `
    <p><strong>Factorial:</strong> ${factorialResult}</p>
    <p><strong>Sum:</strong> ${sumResult}</p>
    <p><strong>Average:</strong> ${averageResult.toFixed(2)}</p>
  `;
}
