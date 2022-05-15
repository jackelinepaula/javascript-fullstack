//SET 

class TransportSpaceship{
    constructor(name){
        this.name = name
        this.currentVelocity = 0
    }

    //É um método que simula uma variável
    set velocity(newVelocity){
        if(newVelocity > 120){
            this.currentVelocity = 120
        } else {
            this.currentVelocity = newVelocity
        }
    }

}

let transport = new TransportSpaceship("Transportador")
transport.velocity = 90

console.log(transport)

//GET

class ResourceProcessStation{
    constructor(name, monthlyProcessLoad){
        this.name = name
        this.monthlyProcessLoad = monthlyProcessLoad
    }

    get weeklyProcessLoad(){
        return this.monthlyProcessLoad / 4
    }
}

let resourceProcessor = new ResourceProcessStation("Gaia", 500)

console.log(resourceProcessor.weeklyProcessLoad)
