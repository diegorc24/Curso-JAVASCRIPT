"use strict";

const h1 = document.querySelector("h1");
h1.classList.add("active", "Teste1");
h1.classList.add("Teste2");
//h1.classList.remove("Teste2");
h1.classList.remove("Teste2", "Teste1");
//h1.classList.remove("active");
h1.classList.toggle("Teste2");

if (h1.classList.contains("active")) {
  //alert("Existe a classe active");
}

//console.log(h1.classList.contains("active"));
//console.log(h1.classList.contains("123123"));

console.log(h1);