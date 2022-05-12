class Captain{
    constructor(name, age, flightHours){
        this.name = name
        this.age = age
        this.flightHours = flightHours
    }
}

class Spaceship{
    constructor(name, crewQuantity, captainName, captainAge, captainFlightHours){
        this.name = name
        this.crewQuantity = crewQuantity
        //este atributo é um objeto da classe Captain
        this.captain = new Captain(captainName, captainAge, captainFlightHours)
    }
}

//Ao mesmo tempo que eu instanciando a classe Spaceship, eu instancio a classe Captain,
//porque o atributo 'captain' da Spaceship é um objeto da Captain
let spaceship = new Spaceship("Elemental", 5, "Nascimento", 30, 15000)
console.log(spaceship)