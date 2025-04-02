// function soma(num1, num2) {
//   if (typeof num1 === "number" && typeof num2 === "number") {
//     return num1 + num2;
//   }

//   return "Você passou dados diferentes!"
// }

// console.log(soma("1", 5));
// console.log(soma(soma(1, 4), soma(1, 4)));

const subtracao = (num1 = 0, num2 = 0) => {
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 - num2;
  }

  return "Você passou dados diferentes!"
};

console.log(subtracao(1, 2));

//const subtracao
