/*
  Precisamos desenvolver uma ferramenta que calcule a idade da pessoa de acordo 
  com a data especifica

  exp.: A idade da pessoa é x anos.
*/
//Função que calcula a idade da pessoa
  function calcularIdade(dataNascimento) {
    let idade = 0;
    //Obtendo a data atual
    const dataAtual = new Date();
    //Criando uma data com a data de nascimento
    const dataNascimentoObj = new Date(dataNascimento);
    //Calculando a idade
    idade = dataAtual.getFullYear() - dataNascimentoObj.getFullYear();
    //Verificando se a pessoa ainda não completou 1 ano
    if (dataAtual.getMonth() < dataNascimentoObj.getMonth() || (dataAtual.getMonth() > dataNascimentoObj.getMonth() || dataAtual.getMonth() === dataNascimentoObj.getMonth() && dataAtual.getDate() < dataNascimentoObj.getDate())) {
    //   //Retornando a idade
      idade--;
     }   

     return idade;
  }
    //Chamando a função com a data de nascimento
    console.log(calcularIdade("06/24/94"));

    ////////////////////////




let dataNascimento = "24/06/1994";
dataNascimento = dataNascimento.split("/").reverse();

const hoje = new Date();

if (dataNascimento.length !== 3) {
  return console.log("Formato de data inválido. Use o formato DD/MM/AAAA");
}

dataNascimento = new Date(dataNascimento.join("-"));

let idade = hoje.getFullYear() - dataNascimento.getFullYear();

const mesAtual = hoje.getMonth() + 1;
const mesNascimento = dataNascimento.getMonth() + 1;

if (
  mesAtual < mesNascimento ||
  (mesAtual === mesNascimento && hoje.getDate() < dataNascimento.getDate())
) {
  idade--;
}

console.log("A idade da pessoa é de " + idade + " anos.");



  

  
