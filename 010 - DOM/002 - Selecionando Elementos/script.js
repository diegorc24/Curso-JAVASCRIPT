"use strict";

const h1 = document.querySelector("h1"); // TAG HTML5
const p = document.querySelector("p");
//const classP = document.querySelector(".paragrafo strong");
const classP = document.querySelector(".paragrafo");
const strong = document.querySelector("strong");
const idP = document.querySelector("#paragrafo");

console.log(h1);
console.log(classP.querySelector("strong"));
console.log(idP);
console.log(strong);

let timer = 0;
const title = document.querySelector("title");

setInterval(() => {
  title.innerText = timer;
  timer++;
}, 1000);

