//Se o cliente pagar a vista, desconto de 10%.
//Se o cliente parcelar, pode parcelar em 6x, mas sem desconto.

const valorDaCompra = 100;
const numeroDeParcelas = 6;

if (numeroDeParcelas === 1) {
  let valorAPagar = valorDaCompra - desconto;
  const desconto = 0.1 * valorDaCompra;
  console.log(valorAPagar.toFixed(2));
} else if (numeroDeParcelas > 1 && numeroDeParcelas <= 6) {
  let valorAPagar = valorDaCompra / numeroDeParcelas;
  console.log(valorAPagar.toFixed(2));
} else {
  console.log("Não parcelamos me mais de 6x.");
}
