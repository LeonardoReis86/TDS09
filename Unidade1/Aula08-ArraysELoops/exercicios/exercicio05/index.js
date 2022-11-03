const original = [1, 4, 12, 21, 53, 88, 112];
let novoArray = [];

for (let numero of original) {
  if (numero % 2 === 0) {
    novoArray.push(numero);
  }
}
console.log(novoArray);
