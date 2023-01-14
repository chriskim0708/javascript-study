import { sum as utilSum, subtract as utilSub } from "./utils.js";

export default function Counter() {
  let count = 0;
  function sum(num) {
    count = utilSum(count, num);
  }
  function subtract(num) {
    count = utilSub(count, num);
  }
  function getCount() {
    return count;
  }
  return {
    sum,
    subtract,
    getCount,
  };
}
