import Cart from "./cart.js";

const cart = Cart();
const container = document.querySelector("#container");
container.append(cart.createTable());
container.append(cart.createSum());
