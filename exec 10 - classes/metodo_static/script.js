//é um método que não vai sofrer alterações
//ele não precisa ser chamado por uma instância

class ResourceProcessorStation{
    constructor(name, monthlyProcessing){
        this.name = name
        this.monthlyProcessing = monthlyProcessing
    }

    static calculateProcessInHours(monthlyProcessing, hours){
        return monthlyProcessing / 720 * hours
    }
}

let totalProcessing = ResourceProcessorStation.calculateProcessInHours(300, 6)

console.log(totalProcessing)

//variável estática
class Spaceship{
    
    static get deceleration(){
        return 0.15
    }

    constructor(name){
        this.name = name
        this.currenteVelocity = 0
    }

    speedUp(acceleration){
        this.currenteVelocity += (acceleration * (1 - Spaceship.deceleration))
    }
}

let spaceship = new Spaceship("Apolo")

spaceship.speedUp(100)