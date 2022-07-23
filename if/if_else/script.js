let dateEntry = prompt("Digite a data de partida (Formato DD/MM/YYYY)")
//Formatando a data
let dateFormat = moment(dateEntry, "DD/MM/YYYY")
//Data atual
let today = moment()
//Diferença de milisegundos entre as datas
let dateDiff = today - dateFormat

//console.log(dateDiff)

let chosenOption = prompt("De que forma gostaria de exibir o tempo de partida\n1 - Segundos\n2 - Minutos\n3 - Horas\n4 - Dias")

if(chosenOption == 1){
    let segundos = Math.round(dateDiff / 1000)
    alert("Tempo de vôo: "+segundos+"s")
}else if(chosenOption == 2){
    let minutos = Math.round(dateDiff / 1000/ 60)
    alert("Tempo de vôo: "+minutos+"min")
}else if(chosenOption == 3){
    let horas = Math.round(dateDiff / 1000/ 3600)
    alert("Tempo de vôo: "+horas+"h(s)")
}else if(chosenOption == 4){
    let dias = Math.round(dateDiff / 1000 / 3600/ 24)
    alert("Tempo de vôo: "+dias+" dia(s)")
}else {
    alert("Opção inválida")
}