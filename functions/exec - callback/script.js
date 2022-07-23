function slowDown(velocity, printer){
    let descelaration = 20

    console.log('Diminuindo velocidade da Nave-Mãe...🚀')

    while(velocity > 0){
        printer(velocity)
        velocity -= descelaration 
    }

    console.log('Nave parada. Comportas abertas✅🚀')
}

let spaceshipVelocity = 150

slowDown(spaceshipVelocity, (velocity)=>{
    console.log("Velocidade atual: "+velocity)
})