/**
 * 02 - 변수 타입
 */
console.log("** 1210: 변수 타입 **");

// 원시타입
const str = "string"; // type: string
const num = 1; // type: number
const bool = true; // type: boolean (true, false)
const undfi = undefined; // type: undefined
const nul = null; // type: null

// 객체타입
const obj = { key1: "valu1", key2: "value2" }; // type: object
const arr = [1, 2, 3, 4, 5]; // type: array
const func1 = function () {}; // type: function
function func2() {}

const a = "fruit";
let b = a;
b = "apple";

console.log("원시타입 a", a);
console.log("원시타입 a 복사", b);

const obj1 = { x: 100, y: 200 };
const obj2 = obj1;

obj2.x = 9999;

console.log("obj 원본", obj1);
console.log("obj 복사본", obj2);

const obj3 = {
  obj1: {
    x: 200,
    y: 200,
  },
  obj2: {
    d: 100,
    z: 50,
  },
};

console.log("obj3", obj3);
console.log("obj3 - obj1", obj3.obj1);
console.log("obj3 - obj2", obj3["obj2"]);

console.log("** 1210: 변수 타입 - end **");
