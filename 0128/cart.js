import Item from "./item.js";

export default function Cart() {
  const header = ["물품명", "개당 금액", "수량", "추가"];
  const items = [
    new Item("우유", 1500, 1),
    new Item("커피", 2500, 2),
    new Item("딸기", 10000, 3),
    new Item("과자", 1200, 4),
    new Item("빵", 1000, 2),
  ];

  const createTable = () => {
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const theadList = document.createElement("tr");

    for (let [i, item] of header.entries()) {
      const theadItem = document.createElement("th");
      theadItem.append(item);
      theadList.append(theadItem);
    }
    thead.append(theadList);
    table.append(thead);

    const tbody = document.createElement("tbody");

    for (let [i, list] of items.entries()) {
      const tbodyList = document.createElement("tr");
      for (let [key, value] of Object.entries(list)) {
        const tbodyItem = document.createElement("td");
        tbodyItem.setAttribute("id", `${key}${i}`);
        tbodyItem.append(value);
        tbodyList.append(tbodyItem);
      }
      const buttonItem = document.createElement("td");
      const button = document.createElement("button");
      button.addEventListener("click", (event) => {
        // const target = event.target;
        // const quantity =
        //   target.parentElement.previousElementSibling.textContent;
        // console.log(quantity);
        const target = document.querySelector(`#productQuantity${i}`);
        const quantity = Number(target.textContent) + 1;
        target.innerHTML = quantity;

        const sum = document.querySelector(`#sum`);
        const sumCount = Number(sum.textContent) + 1;
        sum.innerHTML = sumCount;
      });
      button.append("추가");
      buttonItem.append(button);
      tbodyList.append(buttonItem);
      tbody.append(tbodyList);
    }

    table.append(tbody);

    return table;
  };

  const createSum = () => {
    let sum = 0;
    const box = document.createElement("div");
    const quantities = document.querySelectorAll("td[id^=productQuantity]");
    console.log("quantities", quantities);
    for (let quantity of quantities) {
      const value = Number(quantity.textContent);
      sum += value;
    }
    box.append(`총 수량: `);
    const span = document.createElement("span");
    span.append(`${sum}`);
    span.setAttribute("id", "sum");
    box.append(span);
    return box;
  };

  return {
    createTable,
    createSum,
  };
}
