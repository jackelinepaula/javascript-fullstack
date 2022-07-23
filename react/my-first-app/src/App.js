import React from "react";
//Eu poderia criar um arq Hello.js e importa-lo aqui:
import HelloWorldTwo from './Hello';

//Components são funções 
function HelloWorld(){
  return <h1>Hello World</h1>
}

//Vamos importar tudo no App
function App() {
  return (
   <div>
    <HelloWorld/>
    <HelloWorldTwo/>
   </div>
  );
}

export default App;
