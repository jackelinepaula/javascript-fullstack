let spaceship = {
    name: "K-7",
    type: "Batalha",
    maxCrew: 15,
    turnOn: function(){
        alert("Preparando propulsão")
        alert("Ligando computador de bordo")
    }
}

//ADD atributo "velocity" ao objeto
spaceship.velocity = 0
//FUNCTION aumentar velocidade 
spaceship.speedUp = function(acceleration) {
    //"this" está se referindo ao "velocity" do objeto
    this.velocity += acceleration
}

console.log(spaceship)

spaceship.turnOn()
spaceship.speedUp(10)

console.log(spaceship)

