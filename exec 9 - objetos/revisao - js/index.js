let spcshipname = prompt("Qual o nome da nave?😊")
let spcshiptype = prompt("Qual o tipo da nave?🙄")
let spcshipmaxvel = prompt("Qual a velocidade máxima da nave?😲")

let spaceship = {
    name: spcshipname,
    type: spcshiptype,
    maxVelocity: spcshipmaxvel,
    velocity: 0
}

spaceship.speedUp = function (acceleration) {
    this.velocity = acceleration
}

function velocityUp() {
    let acceleration = Number(prompt(spaceship.name + " em curso\nAcelerar para quanto?☄"))

    if (acceleration <= spaceship.maxVelocity) {
        spaceship.speedUp(acceleration)
    } else {
        alert("Ops! Velocidade máxima atingida!🤔" + "\n\nRelatório: " +
            "\nTentativa de ultrapassagem: " + acceleration + "Km/h" +
            "\nVelocidade atual: " + spaceship.velocity +
            "\nVelocidade máxima da nave: " + spaceship.maxVelocity)
    }
}

function stop() {
    alert("Nave " + spaceship.name + " \nTipo: " + spaceship.type +
        "\nVelocidade atigida: " + spaceship.velocity +
        "\nVelocidade máxima: " + spaceship.maxVelocity +
        "\nEspero que a viagem tenha sido boa!😊🚀")
}

function menu(){
    let choose
    do {
        choose = prompt(spaceship.name + 
            " em curso🚀🏁\nDeseja acelerar ou parar?\n1 - Acelerar\n2 - Parar")
        if (choose == 1) {
            velocityUp()
    
        } else if (choose == 2) {
            stop()
        }
    } while (choose != 2)    
}

//START
menu()
