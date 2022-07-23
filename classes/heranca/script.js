class Spaceship{
    constructor(name, crewQuantity, maxVelocity){
        this.name = name
        this.crewQuantity = crewQuantity
        this.maxVelocity = maxVelocity
        this.velocity = 0
    }

    speedUp(acceleration) {
        this.velocity = acceleration
        if(this.velocity > this.maxVelocity){
            alert("⚠Velocidade máxima ultrapassada!\nDiminua ou a nave irá sofrer danos!⚠")
        }
    }
}

class BattleSpaceship extends Spaceship{
    stop(){
        this.velocity = 0
        alert("Parando nave de batalha")
    }
}

class DiscoverySpaceship extends Spaceship{
    stop(){
        this.velocity = 0
        alert("Parando nave de descoberta")
    }
}

let apolo = new DiscoverySpaceship("Apolo", 10, 90)
let artemis = new BattleSpaceship("Ártemis", 8, 100)

apolo.speedUp(90)
artemis.speedUp(50)

console.log(apolo)
console.log(artemis)



//SOBRESCREVENDO MÉTODOS

class TheSpaceship{
    constructor(name, crewQuantity, maxVelocity){
        this.name = name
        this.crewQuantity = crewQuantity
        this.maxVelocity = maxVelocity
        this.velocity = 0
    }

    speedUp(acceleration) {
        this.velocity = acceleration
        if(this.velocity > this.maxVelocity){
            alert("⚠Velocidade máxima ultrapassada!\nDiminua ou a nave irá sofrer danos!⚠")
        }
    }
}

class TransportSpaceship extends TheSpaceship{
    speedUp(){
        alert("Naves de transporte só aumentam velocidade em 1Km/s")
        this.velocity += 1
    }
}

let transport = new TransportSpaceship("Transportadora", 10, 100)
//transport.speedUp() //<---> DESCOMENTAR OU COMENTAR PARA TESTES



//MÉTODO SUPER
//Utilizando a class TheSpaceship

class TransportSpaceshipTwo extends TheSpaceship{
    constructor(name, crewQuantity, maxVelocity, maxload ){
        //reaproveitando o construtor da class 'TheSpaceship'
        super(name, crewQuantity, maxVelocity)
        this.maxload = maxload
    }

    speedUp(acceleration){
        acceleration /= 2
        alert("Incrementando velocidade em "+acceleration+"km/s")
        super.speedUp(acceleration)
    }
}

let transportSpaceship = new TransportSpaceshipTwo("Transportadora", 4, 100, 240)
console.log(transportSpaceship)

transportSpaceship.speedUp(210) //<---> DESCOMENTAR OU COMENTAR PARA TESTES
