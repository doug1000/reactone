import React from "react";
import './App.css';

//Schleifen in JS und React werden mit dem befehl .map gemacht
 


 export function JsxLoop(){
    const numbers = [1,2,3,4,5,6,7,8,9];
    const berechnung = numbers.map((number, index) => ( <tr key={index}> <td>{number + 100}</td> <td>{index}</td> </tr> ));
    

 return (
    <table><thead>
    <th>Ergebnis</th><th>Index</th></thead>
  <tbody>
{berechnung} 
</tbody>
</table> )}
        
    

export default JsxLoop;










