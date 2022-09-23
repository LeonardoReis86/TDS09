const jogada1 = "pedra"
const jogada2 = "tesoura"

if ((jogada1 === "pedra" && jogada2 === "tesoura") || (jogada1 === "tesoura" && jogada2 === "pedra")) {
    console.log("pedra vence tesoura.");
} else if (jogada1 === jogada2) {
    console.log("empate.");
} else if ((jogada1 === "pedra" && jogada2 === "papel") || (jogada1 === "papel" && jogada2 === "pedra")) {
    console.log("papel vence pedra.");
} else {
    console.log("tesoura vence papel.");
}