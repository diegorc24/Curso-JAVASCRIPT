// function Name(name, sobrenome) {
//   this.name = name;

//   this.sobreNome = () => {
//     const nomeCompleto = `${this.name} ${this.sobrenome}`;
//     return nomeCompleto;
//   }
// }

// const diego = new Name("Diego", "Rodrigues");

// console.log(diego.sobreNome());


function Calculadora(num1, num2) {
  this.soma = () => {
    return `${num1 + num2}`;
  };

  this.subtracao = () => {
    return `${num1 - num2}`;
  };
}

//const calculadora = new Calculadora(1, 2);
console.log(calculadora.soma());
console.log(calculadora.subtracao());


function Calculadora() {
  this.soma = (num1, num2) => {
    return `${num1 + num2}`;
  };

  this.subtracao = (num1, num2) => {
    return `${num1 - num2}`;
  };
}

const calculadora = new Calculadora();
console.log(calculadora.soma(1, 2));
console.log(calculadora.subtracao(5, 1));

