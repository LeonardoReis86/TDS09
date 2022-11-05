// Percorra cada pessoa da lista e imprima uma mensagem de acordo com as condições a seguir.

// a. Se a pessoa não tiver pets, a mensagem deve ser: `Sou João e não tenho pets`.

// b. Se a pessoa tiver apenas um pet, a mensagem deve ser: `Sou João e tenho 1 pet`.

// c. Se a pessoa tiver mais de um pet, a mensagem deve ser: `Sou João e tenho 3 pets`.

const usuarios = [
    {
        nome: "João",
        pets: [],
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"],
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        nome: "Antonio",
        pets: ["Naninha"],
    },
]
quantidadeDePets = 0;
for (let pessoa of usuarios) {
    if (pessoa.pets.length === 0) {
        console.log(`Sou ${pessoa.nome} e não tenho pets.`);
    } else {
        quantidadeDePets = pessoa.pets.length;
        console.log(quantidadeDePets > 1 ? `Sou ${pessoa.nome} e tenho ${quantidadeDePets} pets.` : `Sou ${pessoa.nome} e tenho ${quantidadeDePets} pet.`);
    }
}
