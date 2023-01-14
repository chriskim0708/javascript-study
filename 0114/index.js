// const Call2 = () => {
//   console.log(this); // window 전역 객체
// };

// 기본 함수 호출
function test() {
  // return undefined
} // undefined

function User(name, age) {
  // let this = {}
  this.name = name;
  this.age = age;
  this.information = function () {
    return `user info: ${this.name}, ${this.age}`;
  };
  // return this;
}

const user1 = new User("chris", 20);
const user2 = new User("jake", 27);

console.log("user1", user1.information());
console.log("user2", user2.name);
console.log("compare", user1 === user2);

function Calculator(initial = 0) {
  this.count = initial;
  this.sum = function (num) {
    this.count = this.count + num;
  };
  this.subtract = function (num) {
    this.count = this.count - num;
  };
  this.multiply = function (num) {
    this.count = this.count * num;
  };
  this.divide = function (num) {
    this.count = this.count / num;
  };
}

const calculator1 = new Calculator();
const calculator2 = new Calculator(50);

calculator1.sum(10);
// calculator2.sum(30);

calculator1.subtract(5);
calculator1.multiply(5);

console.log("calculator1.count", calculator1.count);
// console.log(calculator2.count);

function fruit() {
  let type = "apple";
  return function (t) {
    type = t;
    return type;
  };
}
const fr = fruit();
console.log("fr function", fr("strawberry"));

function calc() {
  let count = 0;
  function sum(num) {
    count = num;
  }
  function mul(num) {
    count *= num;
  }
  function getCount() {
    return count;
  }
  return {
    sum,
    mul,
    getCount,
  };
}

const cl = calc();
const cl2 = calc();
cl.sum(10);
cl.mul(10);
console.log("cl", cl.getCount());
console.log("cl2", cl2.getCount());
