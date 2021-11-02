import React from "react";

let nombre = "Sofia";
const styles = { 
    parrafo : { 
        fontFamily: "sans-serif",
        color:"pink"
     }
 };

 function App() { 
     return (
    <>
    <h1 style={{ color: "red"}} PAR DE RUBIAS IMPORTADOS> </h1>    
    <p> ENVIOS A TODO EL PAIS </p>
    <p style = {styles.parrafo}> Nombre: {nombre}</p>
    <p> Edad {10+20}</p>
    </>
     );
  }

  export default App;