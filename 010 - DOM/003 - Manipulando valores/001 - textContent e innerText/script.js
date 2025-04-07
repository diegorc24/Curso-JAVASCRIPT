"use strict";

/**
 * textContent => Retorna o text COM formatações, mas sem os elementos html.
 * innerText => Retorna somente o texto, sem formatações ou elementos html.
 **/

const p = document.querySelector("p");

console.log(p.textContent);
console.log(p.innerText);

p.textContent = "Diego Rodrigues"
p.innerText = "Diego Rodrigues";

//p.textContent = "<strong>Diego Rodrigues</strong>"
//p.innerText = "<strong>Diego Rodrigues</strong>";