"use strict";

const container = document.querySelector(".container");

//container.after("<p>Olá, Diego</p>");

const newP = document.createElement("p");
newP.innerText = "Olá, Diego";

//container.before(newP);
//container.before("Olá, Diego");
container.before("<p>Olá, Diego</p>");
container.after(newP);