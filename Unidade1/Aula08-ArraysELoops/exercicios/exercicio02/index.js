const letras = ["A", "a", "B", "C", "A", "e"];
let contagem = 0;

for (let letra of letras) {
  if (letra === "E" || letra === "e") {
    contagem++;
  }
}
if (contagem === 0) {
  console.log("Nenhuma letra E ou e encontrada.");
} else {
  console.log(
    contagem === 1
      ? `Foi encontrada ${contagem} letra E ou e.`
      : `Foram encontradas ${contagem} letras E ou e.`
  );
}
