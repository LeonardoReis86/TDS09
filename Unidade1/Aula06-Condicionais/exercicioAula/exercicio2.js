//Aplicar taxa dde juros de 1% a.m.
//Parcelar em até 12x
//Valor a pagar M = C (1+i)ˆn
//M = montante a pagar
// i = taxa de juros
// n = tempo

let valorDaCompra = 100;
let numeroDeParcelas = 12;
const taxaDeJuros = 1 / 100;
const montante = valorDaCompra * Math.pow(1 + taxaDeJuros, numeroDeParcelas);
const valorAPagar = montante.toFixed(2);

if (numeroDeParcelas === 1) {
  let valorAPagar = valorDaCompra - desconto;
  const desconto = 0.1 * valorDaCompra;
  console.log(valorAPagar.toFixed(2));
} else if (numeroDeParcelas > 1 && numeroDeParcelas <= 6) {
  let valorAPagar = valorDaCompra / numeroDeParcelas;
  console.log(valorAPagar.toFixed(2));
} else if (numeroDeParcelas > 6 && numeroDeParcelas < 13) {
  console.log(montante.toFixed(2));
}
