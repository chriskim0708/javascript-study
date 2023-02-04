// splice, slice
// splice: 원본 배열을 바꾼다 / index부터 몇개를 자를 것인지
// slice: 원본 배열을 바꾸지 않고 배열 반환 / start index ~ end index

const months = ["Jan", "March", "April", "June"];
// splice
// console.log("months", months);
// console.log("splice 0, 2", months.splice(0, 2));
// console.log("months", months);

// slice (start index 포함, end index는 전까지 자른다)
console.log("slice 2", months.slice(2));
console.log("slice 1, 3", months.slice(1, 3));
const copyMonths = [...months];
const copyMonths2 = months.slice(); // es6 이전에 복사
console.log("slice -2", months.slice(-2));
console.log("slice -3, 1", months.slice(-3, 1));
console.log("slice -3, 3", months.slice(-3, 3));
console.log("slice -4, -1", months.slice(-4, -1));

console.log("months", months);

const myFish = ["angel", "clown", "drum", "mandarin", "sturgeon"];
// // splice
// console.log("myFish", myFish);
// console.log("splice 3, 1", myFish.splice(3, 1));
// console.log("myFish", myFish);
// // reverse splice
// console.log("splice 3, 1", myFish.splice(-2, 1));
// console.log("myFish", myFish);

// replace, insert
// const replace = myFish.splice(1, 2, "parrot", "anemone", "blue");
// console.log("replace", replace);

// myFish.splice(0, 1, "red");
// console.log("myFish", myFish);
