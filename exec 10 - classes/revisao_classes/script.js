class Spaceship {
    constructor(name, crewQuantity) {
        this.name = name
        this.crewQuantity = crewQuantity
        this.doorStatus = false
        this.isHitched = false
    }

    hitch() {
        this.isHitched = true
        this.doorStatus = true
    }
}

let hitchedSpaceship = []

let choose
while(choose != 3){
    choose = menu()
}

function menu() {
    choose = prompt("Bem vindo a Estação Espacial🚀☄"+"\nO que você deseja?"+
                        "\n1 - Engatar nave"+
                        "\n2 - Imprimir naves"+
                        "\n3 - Sair do programa")
    
    switch (choose){
        case "1":
            hitchSpaceship()
            break
        case "2":
            printSpaceship()
            break
        case "3":
            stopProgram()
    }

    return choose
}

function hitchSpaceship(){
    let name = prompt("Qual o nome da nave?🚀")
    let crewQuantity = prompt("Qual a quantidade de tripulantes dessa nave?👩‍🚀👨‍🚀")

    let spaceships = new Spaceship(name, crewQuantity)
    spaceships.hitch()
    hitchedSpaceship.push(spaceships)
}

function printSpaceship(){
    let spaceshipData = hitchedSpaceship.map(spaceship => {
        return "🟣Nave: "+spaceship.name+" - Tripulantes: "+spaceship.crewQuantity
    })

    alert(spaceshipData.join("\n"))
}

function stopProgram(){
    alert("Programa encerrado.")
}