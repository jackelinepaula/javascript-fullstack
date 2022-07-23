let lightyear = prompt("Digite a distância em anos-luz")

let chosenOption = prompt("Para qual unidade deseja converter?\n1 - Parse(PC)\n2 - Unidade Astronômica(AU)\n3 - Quilômetros(KM)")

let chosenUnity
let convertedDistance

switch (chosenOption){
    case "1":
        chosenUnity = "Parsec"
        convertedDistance = lightyear * 0.306601
        break
    case "2":
        chosenUnity = "Unidade Astronômica"
        convertedDistance = lightyear * 63241.1
        break
    case "3":
        chosenUnity = "Quilômetros"
        convertedDistance = lightyear * 9.5 * Math.pow(10, 12)
        break
    default:
        chosenUnity = "Unidade não identificada"
        convertedDistance = "Conversão fora do escopo"
}

alert("Distâcia em anos-luz🎇: "+lightyear+"\n"+"Unidade de conversão📏: "+chosenUnity+"\n"+"Conversão 😮: "+convertedDistance)