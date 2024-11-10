import React from 'react';
import logo from './3333.png';
import './App.css';
import NaviApp from './Navi';
import HalloAusgabe from './HalloWelt';
import Namensliste from './Liste';
import JsxKommentare from './Kommentare';
import StateCounter from './State';
import AusgabeHooks from './Hooks';
import ModalApp from './Modal';
import Converter from './ModalUmrechner';
import TableComponent from './JsonAusgabe';
import Abruf from './DbAusgabe';
import FormComponent from './FormComponent';
import JsxLoop from './Schleifen';
import FunctionMitTrue from './IfJsx';
import ElseIfFunction from './IfElse';
import Eventbeispiele from './Events';
import LadeBalkenComponent from './Ladebalken';



function App() {

  return (
  
    <div className="App">
     
      <NaviApp />
      <header className="App-header">
      
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        <div><LadeBalkenComponent /> </div>
        </p>
      
        <p>React Version: {React.version}</p>
<p>--------------------------------------------------------------------------</p>
           <div className ='hallo'> <h6>Das sind Hallo Welt Ausgaben aus HalloWelt.jsx</h6>
      <HalloAusgabe /> 
      </div>
<div className ='liste'>
      <h6>Das ist eine einfache Arrayauflistung aus Liste.jsx:</h6>
      <Namensliste />
      </div>

      <div className ='kommentare'>
      <h6>Kommentare aus Kommentare.jsx:</h6>
      <JsxKommentare />
      </div>

      <div className='state'>
    <h4>State:</h4>
    <p>State beschreibt die Veränderungen der Anwendung bei Aktionen des Users.<br />
      Dabei ist zu beachten, dass diese Veränderungen undbeding in React geschrieben werden müssen.</p>
<StateCounter />
      </div>

      <div className='hooks'>

<AusgabeHooks/>
      </div>

     
<h4>-----------------------------------------------------------------ModalApp----------------------------------------------------------------------</h4>

<ModalApp/>

<h4>-----------------------------------------------------------------Umrechner------------------------------------------------------------------------------</h4>

<Converter />

<h4>-----------------------------------------------------------Tabellenausgabe aus JSON-------------------------------------------------------------</h4>
<TableComponent />
<Abruf />
<FormComponent />

<h4>-----------------------------------------------------------JSX Loops aus JSX.loops------------------------------------------------------------</h4>

<JsxLoop />

<h4>-----------------------------------------------------------Alternativen zu IF aus IfJsx.jsx------------------------------------------------------------</h4>

<FunctionMitTrue />

<h4>-----------------------------------------------------------ElseIf Funktion aus IfElse.jsx-----------------------------------------------------------</h4>

<ElseIfFunction />

<h4>-----------------------------------------------------------Events.jsx-------------------------------------------------------------------------------------</h4>


<Eventbeispiele />

    
   

    <p>  <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
         React info Seite
        </a></p>    
      </header>
 
    </div>
  );
}

export default App;
