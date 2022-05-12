alert("Bem vindo! A seguir pediremos alguns dados...🚀")

let name = prompt("Qual o seu nome, amigo?")
let age = prompt("Informe agora sua idade✨:")

let ageConfirm = confirm("Sua idade é "+age+",correto?")
let nameConfirm = confirm("Seu nome é "+name+",correto?")

if(ageConfirm==false){
    name = prompt("Oops... Ok. Qual o seu nome, amigo?")
}

if(nameConfirm==false){
    let age = prompt("Oops...Ok. Informe agora sua idade✨:")
}

alert("Olá, "+name+", seja bem vindo(a)🤩!!!!")

