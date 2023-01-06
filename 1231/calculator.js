/**
 * 1231 - 계산하기
 */

const result = document.querySelector("#result");
const input = document.querySelector("#insertInput");
const sumBtn = document.querySelector("#sum");
const subtractBtn = document.querySelector("#subtract");
const multiplyBtn = document.querySelector("#multiply");
const divideBtn = document.querySelector("#divide");

let num = 0;

result.innerHTML = num;
input.value = num;

const finishCalculate = (num) => {
  result.innerHTML = num;
  input.value = 0;
};

const sum = () => {
  num = num + Number(input.value);
  finishCalculate(num);
};

const subtract = () => {
  num = num - Number(input.value);
  finishCalculate(num);
};

sumBtn.addEventListener("click", sum);
subtractBtn.addEventListener("click", subtract);
