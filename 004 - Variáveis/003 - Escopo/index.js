/*
  Escopo:
  Determina quais 
  são os dados que podem 
  ser acessados em uma determinada 
  parte do código.
*/

{
    var nome = "Diego"; // Var sempre será global cuidado ao utilizar
  }
  
  {
    let idade = 30; // Let funciona dentro de um escopo/bloco de código
    console.log(nome); // Var sempre será global cuidado ao utilizar
    console.log(idade);
  }
  
  {
    const sobrenome = "Rodrigues"; // const funciona dentro de um escopo/bloco de código
    console.log(nome); // Var sempre será global cuidado ao utilizar
    console.log(idade); // Vai dar Erro devido a let em outro espcopo
    console.log(sobrenome);
  }