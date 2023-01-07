let value = 0;
let calcType = "";
const container = document.querySelector("#container");
const input = document.createElement("input");
input.setAttribute("type", "text");
// console.log(input.getAttribute("ddd"));
input.setAttribute("readonly", true);
container.append(input);
const btnContainer = document.createElement("div");
btnContainer.style.marginTop = "10px";
const btnStyle = `
    margin-right: 2px;
    background-color: #fff;
    border: 1px solid #ddd;
    font-size: 10px;
    padding: 7px;
    cursor: pointer;
`;

for (let i = 0; i < 10; i++) {
  const btn = document.createElement("button");
  btn.addEventListener("click", (event) => {
    const el = event.target;
    input.value = input.value + el.textContent;
  });
  btn.style = btnStyle;
  btn.textContent = i === 9 ? 0 : i + 1; // true ? true : false
  btnContainer.append(btn);
}

container.append(btnContainer);
const calcContainer = document.createElement("div");
const removeBtn = document.createElement("button");
calcContainer.style.marginTop = "10px";
removeBtn.textContent = "초기화";
removeBtn.style = btnStyle;
removeBtn.addEventListener("click", () => {
  input.value = "";
});
calcContainer.append(removeBtn);

const calc = ["+", "-", "*", "/"];

for (let c of calc) {
  const btn = document.createElement("button");
  btn.textContent = c;
  btn.style = btnStyle;
  btn.addEventListener("click", (event) => {
    const val = event.target.textContent;
    switch (val) {
      case "+": {
        value = Number(input.value);
        input.value = "";
        calcType = val;
        console.log("value", value);
        console.log("input.value", input.value);
        break;
      }
      case "-": {
        console.log("---");
        break;
      }
      case "*": {
        console.log("***");
        break;
      }
      case "/": {
        console.log("///");
        break;
      }
      default: {
        return;
      }
    }
  });
  calcContainer.append(btn);
}

const resultContainer = document.createElement("div");
const enter = document.createElement("button");
enter.textContent = "enter";
enter.style = btnStyle;
enter.addEventListener("click", () => {
  switch (calcType) {
    case "+": {
      input.value = value + Number(input.value);
      break;
    }
  }
  resultContainer.append(
    "result - ",
    "value: ",
    `${value} / `,
    "input.value: ",
    input.value
  );
  console.log("calcType", calcType);
  console.log("value", value);
  console.log("input.value", input.value);
});
calcContainer.append(enter);

// const plusBtn = document.createElement("button");
// plusBtn.textContent = "+";
// plusBtn.style = btnStyle;
// calcContainer.append(plusBtn);

// const subtractBtn = document.createElement("button");
// subtractBtn.textContent = "-";
// subtractBtn.style = btnStyle;
// calcContainer.append(subtractBtn);

container.append(calcContainer);
container.append(resultContainer);

// container
