"use strict";

const container = document.querySelector(".container");

//container.append("Olá Diego");
//container.append("<p>Olá Diego</p>");

// container.appendChild("Olá Diego");
// console.log(container.appendChild("Olá Diego"));
//container.appendChild("<p></p>");

const newDiv = document.createElement("div");
newDiv.innerText = "Olá Diego";

container.appendChild(newDiv);