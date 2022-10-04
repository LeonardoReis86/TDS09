//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "credito";

//valor da mercadoria (centavos)
const valorDoProduto = 13000;

if (tipoDePagamento === "debito" || tipoDePagamento === "dinheiro") {
  const desconto = 10;
  valorFinal = (valorDoProduto - (valorDoProduto * desconto) / 100) / 100;
  console.log(`R$ ${valorFinal.toFixed(2)}`);
} else if (tipoDePagamento === "credito") {
  const desconto = 5;
  valorFinal = (valorDoProduto - (valorDoProduto * desconto) / 100) / 100;
  console.log(`R$ ${valorFinal.toFixed(2)}`);
} else if (tipoDePagamento === "cheque") {
  const desconto = 3;
  valorFinal = (valorDoProduto - (valorDoProduto * desconto) / 100) / 100;
  console.log(`R$ ${valorFinal.toFixed(2)}`);
} else {
  console.log(
    `Não aceitamos outra forma de pagamento alem de debito, credito ou dinheiro`
  );
}
