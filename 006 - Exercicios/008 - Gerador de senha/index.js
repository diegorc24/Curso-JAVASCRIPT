/*
  Precisamos desenvolver uma ferramenta gere senhas aletórias de acordo com tamanho especifico

  exp.: new pass = BXUwPof1fh47fF1qYKQD
*/

function generatePassword(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-{}[]=/|,.;?~""_';
  let password = '';
  for (let i = 0; i < length; i++) {
    password = password + characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return password;
}
// Testar a função
console.log(generatePassword(3)); // BXUwPof1fh47fF1

alea = Math.random();
alea = alea * 90
console.log("alea: ",alea);
console.log("floor: ", Math.floor(alea));




