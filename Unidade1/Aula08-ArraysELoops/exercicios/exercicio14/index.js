const arrayA = [5, 32, 3, 44, 1];
const arrayB = [57, 4, 21, 2, 13];

let novoArray = [];
for (let i = 0; i < arrayA.length; i++) {
  if (arrayA[i] < arrayB[i]) {
    novoArray.push(arrayA[i]);
  } else {
    novoArray.push(arrayB[i]);
  }
}
console.log(novoArray);
