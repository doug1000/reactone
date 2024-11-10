import React from "react";
import './App.css';

//Bsp If ElseIF
 export function ElseIfFunction(){
    
var check = 18;
let ausgabe2;

 if(check == 15) {ausgabe2 = <li>Ist 15</li>;}
 else if (check > 15){ausgabe2 = <li>Ist größer als 15</li>;}
 else ausgabe2 = <li>Ist kleiner als 15</li>;

return (
    <p>{ausgabe2}</p>
)
}

export default ElseIfFunction;