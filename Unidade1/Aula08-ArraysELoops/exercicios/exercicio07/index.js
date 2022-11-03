const nomes = ["Ana", "Joana", "Carlos", "amanda"];

let nomesIniciadosComA = [];

for (let nome of nomes) {
  if (nome[0] === "A" || nome[0] === "a") {
    nomesIniciadosComA.push(nome);
  }
}
console.log(nomesIniciadosComA);
