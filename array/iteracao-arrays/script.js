//ITERAÇÃO DE ARRAYS

let naves = ["Artemis", "Atenas", "Apolo"]

//CALLBACK A CADA ELEMENTO
naves.forEach(function(naves, index){
    console.log("Nave: "+ naves + "\nÍndice: "+ index);
})

let upcasedNaves = naves.map(function(naves){
    let upcased = naves.toUpperCase()
    return upcased
})

console.log(upcasedNaves)

//FILTER
//Filtra de acordo com a condição criando um novo array
let com7carac = naves.find(element => {
    return element.length >= 6 
} )

console.log(com7carac)