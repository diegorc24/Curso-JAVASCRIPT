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

myArrayObj.forEach((item, index) => {
  if (item.nome === "Nay") {
    return console.log("O Mozão ta te esperando");
  }
  
  console.log(index, item.nome);
});