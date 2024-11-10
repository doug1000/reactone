import React, { useState , Fragment } from 'react';
import './App.css';
import Marv1 from './marvelbilder/Marv1.jpg';
import Marv2 from './marvelbilder/Marv2.jpg';
import Marv3 from './marvelbilder/Marv3.jpg';
import Marv4 from './marvelbilder/Marv4.jpg';



export function BilderSchleife(){

   const images = (require.context('./marvelbilder/', false, /\.(png|jpe?g|svg)$/));



    const [count, setCount] = useState(1);
    
    const name = './marvelbilder/Marv';
    const typ = '.jpg';

    const bilder = [];
  
    
    for (let i = 1; i <= count; i++) 
        { 
            let bildername = name + i + typ; 
    bilder.push( <div key={i}> <p><img src={bildername} alt={bildername} /> </p></div>); }
    

        return( 
            <Fragment>
            <p>Anzahl der Wiederholungen des Zählers</p>
            <div><input type ="button" className="btn btn-danger" onClick={() =>setCount (count +1)} value = "Weniger Counter (-)" /></div>
          
           {bilder}
            </Fragment>
            
        );
    };
    
        export default BilderSchleife;
