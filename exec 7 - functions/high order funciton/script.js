function dobrarVelocidade(velocidade, impressão){
    console.log("Entrei em 'dobrarVelocidade'🚀")
    let novaVelocidade = velocidade * 2
    impressão(novaVelocidade)
    return novaVelocidade
}

let imprimirVelocidade = (velocidade)=> {
    console.log("Nova velocidade: "+velocidade+"Km/h🏁🚀")
}

let novaVelocidade = dobrarVelocidade(50, imprimirVelocidade)
console.log(novaVelocidade)

// OUTRO JEITO

// let novaVelocidade = dobrarVelocidade(50, (velocidade)=>{
//     console.log("Nova velocidade: "+velocidade+"Km/h🏁🚀")
//     console.log(velocidade)
// })