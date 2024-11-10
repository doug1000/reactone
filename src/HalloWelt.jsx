import React from 'react';

import './index.css';
import './App.css';

export function HalloWelt(){

    return <h1>Hallo Welt.</h1>
}

 
export const Hallo2 =() => {return <h2>Hallo Welt, Kurzschreibweise 1</h2> } ;
export const Hallo3 = () => <h3>Hallo Welt Kurzschreibweise 2</h3>;

export default function HalloAusgabe()
{
    return(<>
<HalloWelt />
<Hallo2 />
<Hallo3 />
</>)
}

