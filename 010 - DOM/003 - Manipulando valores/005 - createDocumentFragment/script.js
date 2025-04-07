"use strict";

const ul = document.querySelector("ul");
// console.log(ul);
const fragment = document.createDocumentFragment();
// console.log(fragment);

const lanches = ["Lanche 1", "Lanche 2", "Lanche 3", "Lanche 4"];

lanches.forEach((element) => {
  const li = document.createElement("li");
  li.textContent = element;
  //ul.append(li);
  fragment.append(li);
});

//console.log(fragment);
ul.append(fragment);
