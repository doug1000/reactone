import React from "react";


export const Beschreibung1 = () => <p>
<h3>Hooks...</h3>
Sind von react eine Methode um <b>Klassen zu ersetzen.</b><br/>
<p>Klassen wurden in Javascript benutzt, um z.B. Variablen für eine ganze Instanz zugänglich zu machen <br/>
und ihnen eine Lifecircle zu ermöglichen.</p>
Weil es ein Hook ist, <b>muss dieser auch importiert werden ! Bsp. useState siehe State.jsx </b> <br/>
Hooks <b>müssen immer mit "use" </b>  beginnen. Wie z.B. in useState ...<br/>
<p>Hooks...<br/>
... dürfen <b>nicht in Schleifen</b> mit n Wiederholungen verwendet werden !<br/>
... dürfen <b>nicht in if </b> verwendet werden !<br/>
... dürfen <b>nicht in if returns</b> verwendet werden ! z.B. if x dann gebe yyyy aus.<br/></p>H
</p>;
export default function AusgabeHooks()
{
    return(<>
<Beschreibung1 />

</>)
}