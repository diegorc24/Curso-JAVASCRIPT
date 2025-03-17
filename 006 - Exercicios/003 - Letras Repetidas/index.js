/*
  Precisamos mostrar quantas letras repetiras aparecem em uma palavra
  exp.: Abacate = { a: 3, b: 1, c: 1, t: 1, e: 1 }
*/

let palavra = "Abacate";
let str = palavra.toLowerCase().split("");
console.log(str);

for (let i = 0; i < str.length; i++) {
    let cont = 0;
    for (let j = 0; j < str.length; j++) {
        if (str[i] == str[j]) {
            cont++;
        }
    }
    console.log(`${str[i]}: ${cont}`);
}

// const palavra = "Abacate".toLowerCase();

// let letras = {};

// for (let i = 0; i < palavra.length; i++) {
//   if (letras[palavra[i]]) {
//     letras[palavra[i]]++;
//   } else {
//     letras[palavra[i]] = 1;
//   }
// }

// console.log(letras);
