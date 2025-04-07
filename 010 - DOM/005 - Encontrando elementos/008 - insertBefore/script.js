"use strict";

const container = document.querySelector(".container");
// const paragrafo = container.querySelector(".paragrafo");
// const paragrafo = document.querySelector(".paragrafo");
const paragrafo = document.querySelector("#paragrafo");
const h1 = document.querySelector("h1");

const newH2 = document.createElement("h2");
newH2.innerHTML = "Novo H2";

container.insertBefore(newH2, paragrafo);
// container.insertBefore(newH2, h1);