// IIFE = Immediately Invoked Function Expression
// IIFE = Expressão de função invocada imediatamente
(function (num1, num2) {
  const calc = num1 + num2;
  console.log(calc);
})(1, 2);

const calc = 1 + 2;
console.log(calc);

(() => {
  console.log(123);
})();

// ((win, doc) => {
//   console.log(win);
//   console.log(doc);
// })(window, document);

(() => {
  const teste = "teste1";
  console.log(teste);
})();

(() => {
  const teste = "teste2";
  console.log(teste);
})();

// (() => {
//   var teste = "teste";
// })();
// console.log(teste);

var teste2 = "teste2";
(() => {
  const teste = "teste1";
  console.log(teste2);
})();

(() => {
  const teste = "teste2";
  console.log(teste2);
})();
