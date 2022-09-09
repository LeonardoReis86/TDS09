let montante = 90_000;
let capitalInicial = 60_000;
let numeroMeses = 24;

let expoente = 1 / numeroMeses;

const taxaJuros = (Math.pow(montante / capitalInicial, expoente) - 1) * 100;
console.log(taxaJuros);
