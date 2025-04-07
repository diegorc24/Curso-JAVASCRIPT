"use strict";

const div = document.querySelector("div");
div.setAttribute("id", "teste");

div.setAttribute("class", `${div.getAttribute("class")} active`);
div.setAttribute("class", `${div.getAttribute("class")} background-red`);
// div.setAttribute("class", "active background-red");

//div.removeAttribute("class");
div.removeAttribute("id");
console.log(div);
//console.log(div.getAttribute("id"));
