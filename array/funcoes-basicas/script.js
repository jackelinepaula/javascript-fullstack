//FUNÇOES BÁSICAS DE ARRAY JS
let nomeNaves = ["K-13", "Estellar", "Colossus"]
console.log(nomeNaves)

//ADD novo elemento
nomeNaves.push("Empiricus")
console.log(nomeNaves)

//ENCONTRAR posição por nome
let posicao = nomeNaves.indexOf("Estellar")
console.log(posicao)

//ANDA uma casa pra frente
nomeNaves.unshift("Fênix")
console.log(nomeNaves)

//REMOVE *último* elemento (retorna o removido)
let naveRemovida = nomeNaves.pop()

console.log(nomeNaves)
console.log(naveRemovida)

//REMOVE *primeiro* elemento (retorna o removido)
let naveRemovida1 = nomeNaves.shift()

console.log(nomeNaves)
console.log(naveRemovida1)
