class SpacialStation {
    constructor(name, platformsQuantity){
        //ATRIBUTO -- VALOR
        this.name = name
        this.platformsQuantity = platformsQuantity
    }
}

let observatory = new SpacialStation("Observatório", 40)

console.log(observatory)

//Parâmetro padrão
class SpacialStationTwo{
    //Type --> VALOR DEFAULT
    constructor(name, type = "Descoberta"){
        this.name = name
        this.type = type
    }
}

let darwin = new SpacialStationTwo("Darwin")
let kermit = new SpacialStationTwo("Kermit", "Batalha")

console.log(darwin)
console.log(kermit)
