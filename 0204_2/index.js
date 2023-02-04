const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const myFish = ["angel", "clown", "drum", "mandarin", "sturgeon"];

let sum = 0;
for (let number of numbers) {
  sum += number;
}
console.log("sum", sum);

const sumFunc = (() => {
  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
})();
console.log("sumFunc", sumFunc);

const reduceSum = numbers.reduce((prev, cur) => {
  return prev + cur;
}, 0);
console.log("reduceSum", reduceSum);

const fishReduce = myFish.reduce((prev, cur, index) => {
  prev[cur] = index;
  return prev;
}, {});
console.log("fishReduce", fishReduce);
