/*
  Precisamos desenvolver uma ferramenta que conte palavras em um texto

  exp.: javascript = 15.
*/

let texto = "javascript é uma linguagem de programação muito popular";
let teste = texto.split(" ");
let palavraEspecifica = teste.filter((palavra) => palavra === "javascript");
console.log(teste.length);
console.log(palavraEspecifica);
