const ladoA = 7;
const ladoB = 7;
let resultado = ladoA;

if (ladoA === 0 ) {
    resultado = "Branco!";
} else if (ladoA === 1){
    resultado = "Ás!";
} else if (ladoA === 2) {
    resultado = "Duque!";
} else if (ladoA === 3) {
    resultado = "Terno!";
} else if (ladoA === 4) {
    resultado = "Quadra!";
} else if (ladoA === 5) {
    resultado = "Quina!";
} else if (ladoA === 6) {
    resultado = "Sena";
}

if ((ladoA === ladoB) && (ladoA >= 0 ) && (ladoA <= 6)) {
    console.log(` Bucha de ${resultado}`); 
} else {
console.log("Não é bucha")
}