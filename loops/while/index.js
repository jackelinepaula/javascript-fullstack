
dobraEspacial()

function dobraEspacial(){

    //Pegando nome da nave
    let nomeNave = prompt("Qual o nome da nave?")
    //Loop dobra espacial
    let confirmDobra = prompt("Deseja entrar na dobra espacial?\n1 - Sim\n2 - Não")

    if(confirmDobra == 1){
        let i = 3
        alert("Contagem regressiva... Entrando na dobra espacial em "+i+"...")
        while(i > 1){
            i--
            alert(i+"...")
        }
        alert(nomeNave+", dobra espacial feita com sucesso!🪐")
    }else{
        alert(nomeNave+", não entrará na dobra espacial🪐")
    }

}