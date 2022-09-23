//Aplicar taxa dde juros de 1% a.m.
//Parcelar em até 12x
//Valor a pagar M = C (1+i)ˆn
//M = montante a pagar
// i = taxa de juros
// n = tempo

let valorDaCompra = 100;
const taxaDeJuros = 1 / 100;
const montante = valorDaCompra * Math.pow(1 + taxaDeJuros, 12);
const valorAPagar = montante.toFixed(2);
console.log(valorAPagar);
