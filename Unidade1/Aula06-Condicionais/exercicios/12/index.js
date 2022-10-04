const diaDaSemana = 7;

const segunda = 1;
const terça = 2;
const quarta = 3;
const quinta = 4;
const sexta = 5;
const sabado = 6;
const domingo = 7;

if (diaDaSemana < 1 || diaDaSemana > 10) {
  console.log("Dia da semana inválido, digite um número de 1 a 7");
} else if (diaDaSemana === 1) {
  console.log("Segunda Feira");
} else if (diaDaSemana === 2) {
  console.log("Terça Feira");
} else if (diaDaSemana === 3) {
  console.log("Quarta Feira");
} else if (diaDaSemana === 4) {
  console.log("Quinta Feira");
} else if (diaDaSemana === 5) {
  console.log("Sexta Feira");
} else if (diaDaSemana === 6) {
  console.log("Sábado");
} else {
  console.log("Domingo");
}
