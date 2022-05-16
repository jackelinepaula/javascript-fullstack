menu()

function menu(){
    let name = prompt("Bem vindo a Estação de Monitoramento Espacial"+
                        "\nSistema iniciado, vamos começar!"+
                        "\n\nQual o nome da nova nave?")
    
    let crewQuantity = Number(prompt("Qual a quantidade de tripulantes?"))
    
    let type = prompt("Qual o tipo da nave?"+
    "\n1 - Batalha"+
    "\n2 - Transporte") 

    this.spaceship = new Spaceship(name, crewQuantity)

    switch (type){
        case "1":
        let weaponQuantity = Number(prompt("Qual a quantidade de armas da nave?"))
        this.battlespaceship = new BattleSpaceship(spaceship.name, spaceship.crewQuantity, weaponQuantity)

        console.log(battlespaceship)
        break
    }

}
