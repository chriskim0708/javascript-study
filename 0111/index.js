const container = document.querySelector("#container");
const btn = document.createElement("button");
btn.append("settimeout");
container.append(btn);
const viewer = document.createElement("div");
container.append(viewer);
btn.addEventListener("click", timeoutHandler);

function timeoutHandler() {
  const span = viewer.querySelector("span");
  span && span.remove();
  const text = document.createElement("span");
  text.innerHTML = "...loading";
  viewer.append(text);
  setTimeout(() => {
    text.innerHTML = "timeout!!!";
    viewer.append(text);
  }, 3000);
}

const countBox = document.createElement("div");
container.append(countBox);
countBox.style = `
  background-color: #eee;
  margin-top: 20px;
  min-height: 50px;
`;

let count = 0;
let timer = null;

const countText = document.createElement("p");
countText.append(count);
countBox.append(countText);

const startBtn = document.createElement("button");
startBtn.append("start");
const stopBtn = document.createElement("button");
stopBtn.append("stop");
const resetBtn = document.createElement("button");
resetBtn.append("reset");
countBox.append(startBtn, stopBtn, resetBtn);

startBtn.addEventListener("click", () => {
  console.log("start");
  timer && clearInterval(timer);
  timer = setInterval(() => {
    countText.innerHTML = `${++count}`;
  }, 1000);
});
stopBtn.addEventListener("click", () => {
  console.log("stop");
  clearInterval(timer);
});
resetBtn.addEventListener("click", () => {
  console.log("reset");
  clearInterval(timer);
  count = 0;
  countText.innerHTML = `${count}`;
});

// (function () {
//   console.log("test");
// })();

const dateBox = document.createElement("div");
container.append(dateBox);
dateBox.style = `
  background-color: #eee;
  min-height: 50px;
  margin-top: 20px;
`;
const dateText = document.createElement("span");
//const date = new Date("2022-12-15 11:00:00");
//const date = new Date("October 13, 2014 11:13:00");
const date = new Date();
// date.setFullYear(2020);
const month = date.getMonth() + 1;
// date.setMonth(month - 1);
date.setDate(date.getDate() + 20);
date.setHours(date.getHours() + 2);
date.setMinutes(date.getMinutes() + 30);
// date.setMonth(month -);
// 1000 * 60 * 60 * 24;
// dateText.append(`${date.toISOString()}`);
// dateText.append(`${Date.now()}`);
dateText.append(`month: ${month}월, date: ${date}`);
dateBox.append(dateText);
