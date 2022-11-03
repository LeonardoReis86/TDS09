const numeros = [8, 11, 4, 1];
let maiorNumero = 0;
let menorNumero = 0;
let diferenca = 0;

for (let numero of numeros) {
  if (numero > maiorNumero) {
    maiorNumero = numero;
  }
  if (numero < maiorNumero) {
    menorNumero = numero;
  }
}
diferenca = maiorNumero - menorNumero;
console.log(diferenca);
