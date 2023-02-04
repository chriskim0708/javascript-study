const people = [
  { name: "chris", age: 28, address: "seoul" },
  { name: "judy", age: 14, address: "gyounggi" },
  { name: "lucas", age: 23, address: "hwaseong" },
  { name: "sienna", age: 24, address: "incheon" },
  { name: "simba", age: 35, address: "bucheon" },
];

// map
// const map = people.map((value) => {
//   return `${value.name}, ${value.age}, ${value.address}`;
// });
const map = people.map((value, index) => {
  return {
    id: index,
    nick: value.name,
    age: value.age,
    address: value.address,
  };
});
// console.log("map", map);

// forEach
let count = 0;
let str = "";
people.forEach((value, index) => {
  //   console.log("foreach index", index);
  str += `${value.name}: ${value.address} `;
  count += value.age;
});
// console.log("count", count);
// console.log("str", str);

// filter
const filter = people.filter((value) => value.age >= 24);
// console.log("filter", filter);

// find
const find = people.find((value) => value.age >= 24);
const findIndex = people.findIndex((value) => value.age >= 24);
const findLast = people.findLast((value) => value.age >= 24);
const findLastIndex = people.findLastIndex((value) => value.age >= 24);
// console.log("find", find);
// console.log("findIndex", findIndex);
// console.log("findLast", findLast);
// console.log("findLastIndex", findLastIndex);

// some
const some = people.some((value) => value.age >= 24);
// console.log("some", some);

// every
const every = people.every((value) => value.age >= 5);
// console.log("every", every);

const strArr = ["sienna", "chris", "lucas", "sienna"];
const includes = strArr.includes("chris");
// console.log("includes", includes);

const index = strArr.indexOf("sienna");
// console.log("indexOf", index);

const last = strArr.lastIndexOf("sienna");
// console.log("lastIndexOf", last);

const arr = [
  [1, [2, 3, [4, 5]]],
  [6, 7],
  [8, 9],
];

const flat1 = arr.flat();
// console.log("flat1", flat1);
const flat2 = arr.flat(2);
// console.log("flat2", flat2);
const flat3 = arr.flat(Infinity);
// console.log("flat3", flat3);

const at = people.at(0);
// console.log("at: 0", at);
const at2 = people.at(2);
// console.log("at: 2", at2);
const sub2 = people.at(-2);
// console.log("sub2: -2", sub2);

const arr2 = [1, 2, 3, 4, 5];
// console.log("fill", arr2.fill(1));

const arr3 = [1, 2, 3, 4, 5];
const arr4 = [...arr3];
arr4.push(6, 7);
// console.log("arr3", arr3);
// console.log("arr4", arr4);
const pop = arr4.pop();
// console.log("pop", pop);
// console.log("arr3", arr3);
// console.log("arr4", arr4);
const shift = arr4.shift();
// console.log("shift", shift);
// console.log("arr3", arr3);
arr4.unshift(4, 5);
// console.log("arr3", arr3);

const copy = [9, 10];
const arr5 = [...arr3, ...copy];
console.log("arr5", arr5);
const arr6 = arr3.concat([15, 20]);
console.log("arr6", arr6);
arr6.pop();
console.log("arr3", arr3);
