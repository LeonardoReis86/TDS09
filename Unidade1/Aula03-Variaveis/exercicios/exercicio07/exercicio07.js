let populacaoInicial = 1000;

let pacientesInfectados = 4;

let tempoPercorrido = 100;

const constamidados =
  populacaoInicial * Math.pow(pacientesInfectados, tempoPercorrido / 7);
console.log(constamidados);
