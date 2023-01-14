import Counter from "./counter.js";
import People from "./people.js";

const counter = Counter();
counter.sum(10);
counter.subtract(20);
console.log("count", counter.getCount());

const peopleList = [
  new People("chris", 20, "korea"),
  new People("jake", 25, "usa"),
  new People("iris", 13, "canada"),
];

console.log("people list", peopleList);

const container = document.querySelector("#container");
const ul = document.createElement("ul");

for (let people of peopleList) {
  const li = document.createElement("li");
  li.append(`${people.info()}`);
  ul.append(li);
}

container.append(ul);
