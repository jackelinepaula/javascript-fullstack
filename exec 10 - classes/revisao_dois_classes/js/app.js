class App {
  constructor() {
    this.spaceship = null;
  }

  start(){
    this.newSpaceship()
    let chosenOption
    do{
      chosenOption = this.showMenu()
      this.redirectFeature(chosenOption)
    }while (chosenOption != "3")
    this.printExit()
  }

  newSpaceship() {
    let name = prompt( "Bem vindo a Estação de Monitoramento Espacial" + "\nSistema iniciado, vamos começar!" +
      "\n\nQual o nome da nova nave?");
    let crewQuantity = Number(prompt("Qual a quantidade de tripulantes?"));
    let spaceshipKind = this.askForSpacheship()
    
    if(spaceshipKind == "1"){
       let weaponQuantity = prompt("Quantas armas a nave possui?")
       this.spaceship = new BattleSpaceship(name, crewQuantity, weaponQuantity)
    }else{
      let passengers = prompt("Quantos lugares a nave possui?")
      this.spaceship = new TransportSpaceship(name, crewQuantity, passengers)
    }
  }

  askForSpacheship(){
    let chosenOption
    while(!["1", "2"].includes(chosenOption)){
      chosenOption = prompt("Qual o tipo da nave? \n1- Batalha\n2- Transporte")
    }
    return chosenOption
  }

  showMenu(){
    const promptMessage = "O que você deseja fazer?\n"+
                          "1- Acelerar a nave\n"+
                          "2- Trocar a nave\n"+
                          "3- Imprimir e sair"
    
    let chosenOption = prompt(promptMessage)
    while(!["1", "2", "3"].includes(chosenOption)){
      chosenOption = prompt(promptMessage)
    }
    return chosenOption
  }

  redirectFeature(chosenOption){
    switch(chosenOption) {
      case "1":
        this.accelerateSpacheship()
        break
      
      case "2":
        this.newSpaceship()
        break
    }
  }

  accelerateSpacheship(){
    let acceleration = Number(prompt("Quanto gostaria de acelerar?"))
    this.spaceship.speedUp(acceleration)
  }

  printExit(){
    let finalMessage = "Nome: "+ this.spaceship.name +"\n"+
                        "Quantdidade de tripulantes: "+ this.spaceship.crewQuantity+ "\n"+
                        "Velocidade atual: "+this.spaceship.currentVelocity + "\n"
    alert(finalMessage)
  }
}

