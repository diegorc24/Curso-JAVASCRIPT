/*
  Precisamos desenvolver uma ferramenta que calcule quantos dias faltam para 
  o final do mês

  exp.: `Faltam x dias para o fim do mês.
*/

function diasFaltamParaFimDoMes() {

  const dataAtual = new Date();

  const ultimoDiaDoMes = new Date(dataAtual.getFullYear(), dataAtual.getMonth() + 1, 0).getDate();

  const diasFaltam = ultimoDiaDoMes - dataAtual.getDate();

  return diasFaltam;

}

console.log(`Faltam ${diasFaltamParaFimDoMes()} dias para o fim do mês.`);

// const dataAtual = new Date();
// const ano = dataAtual.getFullYear();
// const mes = dataAtual.getMonth();

// const proximoMes = new Date(ano, mes + 1, 1);

// const umDia = 1000 * 60 * 60 * 24;
// const diffTempo = Math.abs(proximoMes - dataAtual);
// const diffDias = Math.ceil(diffTempo / umDia);

// console.log("Faltam " + diffDias + " dias para o fim do mês.");

