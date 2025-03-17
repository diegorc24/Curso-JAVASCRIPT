/*
  Precisamos desenvolver um contador de vogais que não apenas calcule a quantidade  
  de vogais em uma frase, mas também retorne as vogais que foram utilizadas.

  exp.: Abacate = { total: x, vogais: [x,y,z] }
*/

// let vogais = "aeiou".split("");
// let palavra = "Abacate";
// let str = palavra.toLowerCase().split("");

// console.log(vogais);
// console.log(palavra);

// for (let i = 0; i < str.length; i++) {
//     let cont = 0;
//     for (let j = 0; j < vogais.length; j++) {
//         if (str[i] == vogais[j]) {
//         }
//     }
//     console.log(`${cont}`);
// }

// let vogais = "aeiou".split("");
// let palavra = "Abacate";
// let str = palavra.toLowerCase().split("");
// let total = 0;
// let vogaisUsadas = [];

// for (let i = 0; i < str.length; i++) {
//     for (let j = 0; j < vogais.length; j++) {
//         if (str[i] == vogais[j]) {
//             total++;
//             vogaisUsadas.push(str[i]);
//         }
//     }
// }
// console.log(`Total de vogais: ${total} e ${vogaisUsadas}`);


let minhaString = "Dener São Pedro Troquatte";
minhaString = minhaString.toLowerCase();

const vogais = [...minhaString].filter((vogal) =>
  /[aeiouáéíóúàèìòùãẽĩõũâêîôûäëïöü]/.test(vogal)
);

const total = vogais.length;
console.log({ total, vogais });


