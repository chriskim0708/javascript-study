/**
 * 1231 - dom 함수
 * dom
 */

/**
 * es5 이전
 */
// const container = document.getElementById("container");
// const pTag = document.getElementsByTagName("p");
// const box = document.getElementsByClassName("box");
// const box2 = document.getElementsByName("box2");

/**
 * es5 after
 */
const container = document.querySelector("#container");
const input = document.querySelector("input[name=text]");
const btn = document.querySelector("button#insert");
const remove = document.querySelector("button#remove");
const message = document.createElement("div");

let createEl = 0;
btn.addEventListener("click", () => {
  const p = document.createElement("p");
  p.style.setProperty("background-color", "#eee");
  p.append(input.value);
  p.setAttribute("id", `p-${createEl++}`);
  setTimeout(() => {
    p.remove();
  }, 5000);
  message.append(p);
  container.insertBefore(message, null);
  input.value = "";
});
remove.addEventListener("click", () => {
  const sel = document.querySelector("#p-1");
  sel.remove();
});

const count = document.querySelector("#count");
const btn2 = document.querySelector("button#stop");
const btn3 = document.querySelector("button#start");
console.log("count id", count.getAttribute("id"));
const test = () => {
  return setInterval(() => {
    // const span = document.createElement("span");
    // span.append(++i);
    count.innerHTML = ++i;
  }, 2000);
};
let i = 0;
let interval = test();
btn2.textContent = "sdddd";
btn2.addEventListener("click", () => {
  clearInterval(interval);
});
btn3.addEventListener("click", () => {
  interval = test();
});
