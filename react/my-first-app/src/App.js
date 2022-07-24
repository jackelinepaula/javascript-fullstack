import React from "react";
//Eu poderia criar um arq Hello.js e importa-lo aqui:
//Components são funções 
// function HelloWorld(){
//   return <h1>Hello World</h1>
// }

import Planets from "./components/planets";

//Vamos importar tudo no App
function App() {
  return (
   <div>
    <Planets/>
   </div>
  );
}

export default App;
