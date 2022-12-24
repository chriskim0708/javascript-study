/**
 * 1224 - 객체 복습
 */

// 1. 객체의 얕은 복사
const a = [1, 2, 3, 4, 5];
const copyA = [...a, 6, 7];
console.log("copyA", copyA);

// 심화 - 1
const c = [1, 2, 3, 4, 5];
const d = [...c, 9, 10];
d[0] = 9;
d[1] = 10;

// 심화 - 2
const classA = {
  judy: {
    age: 25,
    email: "judy@gamil.com",
  },
  pillip: {
    age: 24,
    email: "pillip@gamil.com",
  },
};
const classB = {
  ...classA,
  judy: {
    ...classA.judy,
    age: 26,
  },
  pillip: {
    ...classA.pillip,
    age: 25,
  },
  kein: {
    age: 27,
    email: "kein@gamil.com",
  },
};

console.log("classB", classB);
