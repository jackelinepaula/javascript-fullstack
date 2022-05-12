let nomeNave = prompt("Digite o nome da nave🚀")

let caracterTroca = prompt("Qual caracter você deseja substituir?🤨")

let caracter = prompt ("E qual você quer colocar no lugar do '"+caracterTroca+"'?👀")

let novoNomeNave = ""

for(let pos = 0; pos<nomeNave.length; pos++){
    if(nomeNave[pos] == caracterTroca) {
        novoNomeNave += caracter;
    }else {
        novoNomeNave += nomeNave[pos]
    }
}

alert("O novo nome da nave é: "+novoNomeNave+"✨✨")