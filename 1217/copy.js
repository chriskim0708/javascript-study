/**
 * 1217 - shallow copy
 */

console.log("** 1217: 얕은 복사 **");

const obj = {
  // aaa
  x: 10,
};
const obj1 = obj; // aaa
obj1.x = 20;

const people = {
  // aaa
  name: "judy",
};
const woman = Object.assign({}, people); // bbb
woman.name = "selly";

// spread operator
// object, array (o), function (x)
// 할당하고자 하는 객체의 타입이 같아야 한다.
const woman2 = { ...people }; // ccc
woman2.name = "candy";

// console.log("복사 people - woman", woman);
// console.log("원본 people", people);

// console.log("복사 people - woman2", woman2);
// console.log("원본 people", people);

const man = {
  name: "chris",
  age: 30,
};

const man2 = Object.assign(
  // es6 이전 - shallow copy
  {},
  man,
  { name: "pillip" },
  { email: "pillip@naver.com" }
);
// console.log("man", man);
// console.log("man2", man2);

// es6부터
const man3 = { ...man, name: "evan", email: "evan@gmail.com" }; // name: evan, email: evan@gmail.com
// console.log("man3", man3);

const dObj = {
  // aaa
  a: 1,
  b: {
    // bbb
    x: 10,
    z: 20,
  },
};
const copyObj = { ...dObj, b: { ...dObj.b } };

copyObj.a = 5;
copyObj.b.x = 33;

console.log("dup obj - 원본", dObj);
console.log("copy obj - 복사본", copyObj);
