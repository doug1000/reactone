import React from "react";

import { useState } from 'react';



function StateCounter(){
    //Eine neue Variable wird deklariert
    const [count, setCount] = useState(1);
    {{/*Javscript Events wie onClick sind Case sensitive. Also das C von Click muss groß geschrieben sein*/}}

    return(
        <div>
            <p>Du hast mich {count} mal gedrückt</p>
            <button className="btn btn-success" onClick={() => setCount(count + 1 )}>+</button> 
            <button className="btn btn-danger" onClick={() => setCount(count - 1 )}>-</button>
            <button className="btn btn-reset" onClick={() => setCount(count-count)}>Reset</button>
        </div>
    )
}

export default StateCounter;