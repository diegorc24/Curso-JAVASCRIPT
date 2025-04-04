const myArray = [1, 2, 3, 4, 5, 6];
const myArrayObj = [
  {
    nome: "Diego",
    sobrenome: "Rodrigues",
  },
  {
    nome: "Nay",
    sobrenome: "Rodrigues",
  },
  {
    nome: "José",
    sobrenome: "Rodrigues",
  },
];

// for ([inicialização]; [condição]; [expressão final])
// for (let i = 0; i < myArrayObj.length; i++) {
//   console.log(myArrayObj[i].nome, myArrayObj[i].sobrenome);
// }

//for Of
// for (const item of myArray) {
//   console.log(item);
// }

// for in
const obj = {nome: "Diego", sobreNome: "Rodrigues" };

for (const key in obj) {
  console.log(key, obj[key]);
}