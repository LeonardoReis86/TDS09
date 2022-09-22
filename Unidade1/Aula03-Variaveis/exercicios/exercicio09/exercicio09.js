let numeroLados = 6;

const somaAngulosInt = (numeroLados - 2) * 180;

let angulo = somaAngulosInt / numeroLados;

console.log(
  `A soma dos angulos internos é de ${somaAngulosInt} graus e o valor de cada angulo do polígono é de ${angulo} graus`
);
