const firstNumber = document.getElementById("number-one");
const secondNumber = document.getElementById("number-two");
const result = document.getElementById("result");

document.getElementById("calculate").addEventListener("click", () => {
  const operation = document.querySelector('input[name="operation"]:checked');

  if (firstNumber.value === "" || secondNumber.value === "") {
    result.textContent = "Please enter both numbers.";
    return;
  }

  if (!operation) {
    result.textContent = "Please choose an operation.";
    return;
  }

  const first = Number(firstNumber.value);
  const second = Number(secondNumber.value);
  let answer;

  switch (operation.value) {
    case "add":
      answer = first + second;
      break;
    case "subtract":
      answer = first - second;
      break;
    case "multiply":
      answer = first * second;
      break;
    case "divide":
      if (second === 0) {
        result.textContent = "Cannot divide by zero.";
        return;
      }
      answer = first / second;
      break;
    default:
      result.textContent = "Please choose a valid operation.";
      return;
  }

  result.textContent = `Result: ${answer}`;
});
