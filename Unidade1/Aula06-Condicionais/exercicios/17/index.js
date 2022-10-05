//valor do produto comprado.
const valorDoProduto = 100000;

//quantidade de parcelas
const quantidadeDoParcelamento = 10;

//valor pago
const valorPago = 30000;

const parcelasPagas = 3;
const parcelasRestante = quantidadeDoParcelamento - parcelasPagas;

const ValorEmAberto = (valorDoProduto - valorPago) / 100;
const valorDaParcela = (ValorEmAberto / parcelasRestante).toFixed(2);
console.log(
  `O valor em aberto é de ${ValorEmAberto} parcelado em ${parcelasRestante} prestações de R$${valorDaParcela}`
);
