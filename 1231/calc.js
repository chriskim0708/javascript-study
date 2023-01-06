/**
 * 1231 - 함수
 * calc
 */

/**
 * 함수의 선언식
 */

// 기명함수
function calc() {
  console.log("calc");
}
// x
const calc2 = function () {
  console.log("calc2");
}; // 익명함수
// es6 이후 (o)
const calc3 = (a, b, c) => {
  console.log("calc3: a", a);
  console.log("calc3: b", b);
  console.log("calc3: c", c);
  return "a";
}; // 화살표 함수 (arrow function)

const sum = (a, b) => {
  return a + b;
};

console.log("sum", sum(4, 5));
// const sum1 = sum(10, 20);
// const sum2 = sum(5, 25);
console.log("sum + sum", sum(sum(10, 20), sum(5, 25)));

const subtract = (a, b) => {
  return a - b;
};
const mutiply = (a, b) => {
  return a * b;
};
const divide = (a, b) => {
  return a / b;
};

console.log("subtract = 50", subtract(60, 10));
console.log("mutiply = 30", mutiply(5, 6));
console.log("divide = 2", divide(4, 2));

const calcResult = divide(mutiply(subtract(sum(10, 30), sum(5, 25)), 5), 10);
console.log("calcResult", calcResult);
