const capital = 1000;
const taxaDeJurosFixa = 0.125;
const tempo = 5;

const montante = capital * Math.pow(1 + taxaDeJurosFixa, tempo);

console.log(montante);
