import React from "react";

export default function JsxKommentare (){
    //Kommentar
    /*Auch ein Kommentar
    Mehrzeilig */

    const element =(
       <p>
            {/*mehrzeiliger Kommentar* innerhalt von JSX */}
            Hello World /*Kein Kommentar*/
           
        
       <h5> <p>-mehr zu sehen in Kommentare.jsx-</p></h5></p>
    )
    return element;
};