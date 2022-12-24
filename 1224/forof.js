/**
 * 1224 - 반복문
 */

const obj = { a: 1, b: 2, c: 3 };

const keyArr = Object.keys(obj);
console.log("keyArr", keyArr);
for (let key of keyArr) {
  console.log("key", key);
}

const valArr = Object.values(obj);
console.log("valArr", valArr);
for (let value of valArr) {
  console.log("value", value);
}

const entryArr = Object.entries(obj);
console.log("entryArr", entryArr);
for (let [key, value] of entryArr) {
  console.log("entryArr key", key);
  console.log("entryArr value", value);
}

for (let key of keyArr) {
  if (key === "a") continue;
  console.log("a key 제외", key);
}

for (let value of valArr) {
  if (value % 2 !== 0) continue;
  console.log("짝수만", value);
}

let sum = 0;
for (let value of valArr) {
  sum += value;
}
console.log("sum", sum);
