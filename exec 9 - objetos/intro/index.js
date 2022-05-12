let nave = {
    nome: "Douglas",
    tripulantes: 9,
    tipo: "Batalha"
}

//let nave = new Object()

//Apresentando normal
console.log("Apresentando normal")
console.log(nave)
// '' 1 propriedade apenas
console.log("Apresentando 1 chave apenas")
console.log(nave["nome"])


//Também da pra add novas chaves no objeto por fora
nave.engate = false
nave["combustivel"] = 100

console.log("Apresentando pós-alterações")
console.log(nave)