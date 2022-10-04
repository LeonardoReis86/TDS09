const idade = 18;
const possuiPatologia = false;
const altura = 180;
const ehEstudante = false;

if (idade < 12 || idade > 65 || possuiPatologia || altura < 150) {
  console.log("Acesso Negado!");
} else if (ehEstudante || idade < 18) {
  console.log("Custo do Brinquedo R$ 10,00");
} else {
  console.log("Custo do Brinquedo R$ 20,00");
}
