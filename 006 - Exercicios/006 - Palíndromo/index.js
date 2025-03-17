/*
  Precisamos desenvolver uma ferramenta que verifique se a palavra é um palíndromo

  exp.: arara = true
  exp.: dener = false
*/

let palavra = "Arara".toLowerCase();
let palavraInvertida = palavra.split("").reverse().join("");

if (palavra === palavraInvertida) {
   return console.log(palavra + " é um palíndromo");
  
}

return console.log(palavra + " não é um palíndromo");