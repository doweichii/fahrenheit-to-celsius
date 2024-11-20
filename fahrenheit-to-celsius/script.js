// Avarage Calculator

// Event listener
document.getElementById("calc-btn").addEventListener("click", calcAverage);

// Event Function
function calcAverage() {
  // Input
  let num1 = +document.getElementById("num1").value;

  // Process
  let Average = (num1 + num2 + num3) / 3;

  // Output
  document.getElementById("ave-out").innerHTML = Average;
}
