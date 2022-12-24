/**
 * 1217 - 반복문
 * while, do while(x), for, for in, for of(es6부터)
 */

console.log("** 1217: 반복문 start **");

/**
 * for
 */
const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// arr[0] ~ arr[9]
// arr.length = 배열의 길이 // 1부터 // length 10

// (intialize, test, increment) { code = statement }
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

const arr2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// arr[0] ~ arr[9]
// arr.length = 배열의 길이 // 1부터 // length 10

// (intialize, test, decrement) { code = statement }
// for (let i = arr2.length - 1; i >= 0; i--) {
//   console.log("arr2", arr2[i]);
// }

const obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
};
/**
 * for in (es6 이전까지)
 * 성능상의 문제로 쓰이지 않음
 */
// for (let k in obj) {
//   console.log("for in", obj[k]);
// }

/**
 * for of (es6 이후부터)
 */
const keys = Object.keys(obj);
const values = Object.values(obj);
const entries = Object.entries(obj);
console.log("obj keys", keys);
console.log("obj values", values);
console.log("obj entries", entries);
for (let [k, v] of entries) {
  console.log("for of", v);
}

/**
 * while
 */
// let i = 0; // intialize

// (test)
// while (i < 10) {
//   console.log(i);
//   i++;
// }

console.log("** 1217: 반복문 end **");
