import React, { Fragment, useState } from "react";
import './App.css';
import StateCounter from './State';

export function Flexicounter(){

const[ count, setCount ] = useState(1); // Setzen des Initialwertes von 1 für die State Variable
let content = []; // 

for(let i= 0; i< count; i++)
{
    content.push(<StateCounter />);
}

return(
    <Fragment>
        <p>Anzahl der Wiederholungen des Zählers</p>
        <input type ="button" className="btn btn-danger" onClick={() =>setCount (count -1)} value = "Weniger Counter (-)" />
        <input type ="button" className="btn btn-success" onClick={() => setCount (count + 1)} value = "Mehr Counter (+)" />

        {content}

    </Fragment>
);
};

export default  Flexicounter;