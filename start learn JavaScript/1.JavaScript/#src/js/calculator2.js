const resultElement = document.getElementById("result"); //Создаем функцию
console.log(resultElement.textContent); //команда textContent читает только <div></div>

const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const submitBtn = document.getElementById("submit"); // Исправлена опечатка
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");
let action = "+";

console.log(input2.value); //команда value читает <input>, <textarea>, и <select>.

const sum = Number(input1.value) + Number(input2.value); //Переводим строчный элемент в цифровой с помощю Number
resultElement.textContent = sum;

plusBtn.onclick = () => {
  action = "+";
};

minusBtn.onclick = () => {
  action = "-";
};

const printResult = (result) => {
  if (result > 0) {
    resultElement.style.color = "green";
  } else {
    resultElement.style.color = "red";
  }
  resultElement.textContent = result;
};

const computeNumbersWithAction = (inp1, inp2, actionSymbol) => {
  const num1 = Number(inp1.value);
  const num2 = Number(inp2.value);
  if (actionSymbol == "+") {
    return num1 + num2;
  } else if (actionSymbol == "-") {
    return num1 - num2;
  }
};

submitBtn.onclick = () => {
  const result = computeNumbersWithAction(input1, input2, action);
  printResult(result);

  //if (action == '+') {
  //const sum = Number(input1.value) + Number(input2.value);
  //printResult(sum)
  //else if (action == '-') {
  //const sum = Number(input1.value) - Number(input2.value); //Создаем стрелочную функцию для сложения
  //printResult(sum);

  //}

  //};
};
