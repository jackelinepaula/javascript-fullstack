const navesInfo = [
    ["Marcos", 10, true],
    ["Vinicios", 8, true],
    ["Douglas", 5, false],
    ["Jackeline", 3, true],
    ["Deivid", 15, false]
]

let mais_tripulantes = navesInfo.filter(element => {
    return element[1] > 9
}).map(element => {
    return element[0]
})


let engate_pendente = navesInfo.findIndex(naves => {
    return naves[2] == false
})


let upcased = navesInfo.map(function(element){
    let nomeNaves = element[0].toUpperCase();
    return nomeNaves
})


alert("🚀Naves com mais de 9 tripulantes: " + mais_tripulantes.join(", ") +
"\n\n🚥❗Nave com engate pendente: " + engate_pendente + 
"\n\n🚀🪐Nome das naves em caixa alta: " + upcased.join(", "))
