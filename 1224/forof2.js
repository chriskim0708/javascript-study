/**
 * 1224 - 반복문
 */

const cars = ["BMW", "Volvo", "Mini"];

let text = "";
for (let x of cars) {
  text += x;
}
console.log("cars text", text);

const str = "JavaScript";
let text2 = "";
for (let x of str) {
  if (x === "S" || x === "t") continue;
  text2 += x;
}
console.log("text2", text2);

let text3 = "";
for (let x of str) {
  if (x === "S") break;
  text3 += x;
}
console.log("text3", text3);
