import data from "./data.js";
import {ham} from "./app.js";

const title = document.querySelector(".product__header-title").textContent;

let thisPage = 1;
let limit = 6;
let list = data.filter((item) => item.category === title);
console.log(list);

function loadItem() {
  let beginGet = limit * (thisPage - 1);
  let endGet = limit * thisPage - 1;
  list.forEach((so, key) => {
    console.log({so, key});
    const element = ham(so.name, so.category, so.img, so.newPrice, so.oldPrice);
    console.log(element)
    if (key >= beginGet && key <= endGet) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
  listPage();
}



loadItem();
function listPage() {
  let count = Math.ceil(list.length / limit);
  document.querySelector(".listPage").innerHTML = "";

  if (thisPage != 1) {
    let prev = document.createElement("li");
    prev.innerText = "PREV";
    prev.setAttribute("onclick", "changePage(" + (thisPage - 1) + ")");
    document.querySelector(".listPage").appendChild(prev);
  }

  for (i = 1; i <= count; i++) {
    let newPage = document.createElement("li");
    newPage.innerText = i;
    if (i == thisPage) {
      newPage.classList.add("active");
    }
    newPage.setAttribute("onclick", "changePage(" + i + ")");
    document.querySelector(".listPage").appendChild(newPage);
  }

  if (thisPage != count) {
    let next = document.createElement("li");
    next.innerText = "NEXT";
    next.setAttribute("onclick", "changePage(" + (thisPage + 1) + ")");
    document.querySelector(".listPage").appendChild(next);
  }
}
function changePage(i) {
  thisPage = i;
  loadItem();
}
