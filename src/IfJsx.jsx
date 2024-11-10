import React from "react";
import './App.css';
/*
Direkt IF Schleifen gibt es in React nicht.
Wir können aber das "IF Argument als const = True oder False angeben"

Für IF --> ELSE benutzen wird  ?   :

*/

export function FunctionMitTrue()
{

 //Bsp eine einfache Ergebnis IF Else Ausgabe   
    const isGood = false;

    let ausgabe = isGood
    //If
    ? <li>Ist da</li>
    //Else
    : <li> Ist nicht da</li>;


 

 

    return(
        <p>
Erste IF Ausgabe : {ausgabe}



</p>     
        
    )



}

export default FunctionMitTrue;