let nome = prompt("Digite seu nome😊")

alert("Iremos invertê-lo pra você até encontrar o caracter proibido😮🤨")

let caracter = prompt("Qual caracter você escolhe para ser proibido?🤨🚫")

let novoNome = ""

for(let i = nome.length - 1; i >=0 ; i--){
    if(nome[i]==caracter){
        break
    }
    novoNome+=nome[i]
}

alert("Seu nome invertido até o caracter proibido é: "+novoNome+" 🤩😮")