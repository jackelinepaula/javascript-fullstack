let spaceship = {
    name: "K-7",
    type: "Batalha",
    crew: ["Douglas", "Marcos", "Deivid"]
}

console.log("Objeto com array na propriedade")
spaceship.crew.push("Vinicius")
console.log(spaceship)


let spaceshipnames = [
    {name: "K-13", type: "Batalha", crewQuantity: 10 },
    {name: "J-18", type: "Viagem", crewQuantity: 15 },
]

console.log("Array de Objetos")
console.log(spaceshipnames)


let spcshipnames = [
    {name: "K-13", type: "Batalha", crewQuantity: 10 },
    {name: "J-18", type: "Viagem", crewQuantity: 15 },
]

spcshipnames.forEach(spaceship =>{
    alert("Nave: " + spaceship.name + " tem " + spaceship.crewQuantity + " tripulantes 🚀🎇")
})