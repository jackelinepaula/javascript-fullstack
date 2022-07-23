//FUNÇÃO SEM RETURN
function aumentarVel(velocidade, aceleracao){
    let novaVel = velocidade + aceleracao
    console.log(novaVel)
}

aumentarVel(50, 20)

//FUNÇÃO COM RETURN
function soma(nbr, nbr2){
    let result = nbr + nbr2
    return result
}

let somaR = soma(10, 10)
console.log(somaR)




