//ARRAYS BIDIMENSIONAIS
//-- Arrayas que armazenam outros arrays
let nomeNaves = [["Colossus", 10], ["K-13", 13], ["Estellar", 15], ["Empiricus", [true, false] ]]
console.log(nomeNaves[3][1][0])

//SPLICE E SLICE

//SPLICE -- COSTURAR
let nomeNavess = ["Marcos", "Douglas", "Vinicius"]

console.log(nomeNavess)

//indicando elementos para remover e depois "costurando" +2 novos elementos
//a variável está recebendo os elementos removidos
let nomesRemovidos = nomeNavess.splice(1, 2, "Jackeline", "Deivid")

console.log(nomeNavess)
console.log(nomesRemovidos)

//SLICE -- DIVIDIR

let nomeNavesss = ["Baba", "Bebe", "Bibi"]
let nomeSlice = nomeNavesss.slice(0, 2)

console.log(nomeSlice)

