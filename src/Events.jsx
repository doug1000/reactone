import React from "react";
import './App.css';

/* Event und Evethandler können genutzt werden wie bei JS oder HTMl ABER !!! geschieben in camelCase z.B. onClick={funktion} */

export function Eventbeispiele()
{


const clicker2 = () =>{ 
    alert("Das ist eine Funktionsausgabe")};

    return ( 
    <p>
        {/*Beispiel für eine Buttonausgabe in der direkt reingeschrieben wird */}
        <button className="btn btn-success" onClick ={() => alert ("Es wurde geclickt")} > Klick mich </button>
         {/*Beispiel für ein Buttonevent welches sich eine Funktion "clicker2" aufruft*/}
        <button className="btn btn-default" onClick ={clicker2}>Clicker2</button>      
        </p>
)

}
    //BSP1 Inline geschieben.




// Ausgeschrieben als return





export default Eventbeispiele;