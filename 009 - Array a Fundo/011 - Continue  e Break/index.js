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
    nome: "José 0",
    sobrenome: "Rodrigues",
  },
  {
    nome: "José 1",
    sobrenome: "Rodrigues",
  },
  {
    nome: "José 2",
    sobrenome: "Rodrigues",
  },
  {
    nome: "José 3",
    sobrenome: "Rodrigues",
  },
];

for (const item of myArrayObj) {
  if (item.nome === "Nay") {
    console.log("O mozão ta te esperando");
    continue;
  }

  if (item.nome === "José 1") {
    console.log("Lembrar de enviar um SMS");
    //break;
  }

  console.log(item);
}