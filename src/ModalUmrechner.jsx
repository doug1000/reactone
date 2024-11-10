import React, { useState } from "react";
import './Modal.css';
import './App.css';

/**
 * Das Erste Beispiel eines einfachen Wechselkurs-Rechners.
 * Es werden die notwendigen Daten im lokalen State abgelegt, eine Umrechnungsfunktion bereitgestellt
 * und mit JSX das Aussehen der App definiert.
 */
export default function Converter() {

    const [name, setName] = useState("Bitcoin");
    const [exchange, setExchange] = useState("1.0");
    const [value, setValue] = useState("1.0");
    const [result, setResult] = useState("");

    const convert = () => {
        const newValue = parseFloat(exchange) * parseFloat(value);
        setResult(newValue.toString());
    };
    
    return ( <React.Fragment>
        <div className="Converter">
            
            <label>
                Crypto-Name:
            </label>
            <input type="text" name="name" value={name} onChange={e => setName(e.target.value)} />
            
            <label>
                aktueller Wechselkurs:
            </label>
            <input type="text" name="kurs" value={exchange} onChange={e => setExchange(e.target.value)} />
            
            <label>
                Anzahl Coins:
            </label>
            <input type="text" name="name" value={value} onChange={e => setValue(e.target.value)} />
            
            <button onClick={() => convert()}>
                Berechnen
            </button>

        </div>

        <p />
        <label>Mit dem Wechselkurs von {exchange} sind deine {name}-Coins heute {result}€ Wert.</label>
    </React.Fragment>
    );
};



 
  
  
    

 



