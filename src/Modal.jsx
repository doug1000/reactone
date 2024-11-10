import React from 'react';
import { useState } from 'react';
//import './App.css'; // Optional: für zusätzliche Stile
import './Modal.css';

function ModalApp() {
    

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false) ;
 
  
    const [message, setMessage] = useState('');
    const handleClick = () => {
        setMessage('Hallo, das ist der Text, welcher neu angezeigt wird. ');
      };

     function clear () {
        setMessage('');}
    

  return (
    <div >
      <button  className ='btn btn-success'onClick={openModal}>Open Modal</button>
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>×</span>
            <p>This is a modal window!</p>
            <p className ='anzeigetext'>{message}</p>
            
            
            <button className='btn btn-danger' onClick={closeModal}>Close</button>
            <button  className ='btn btn-default'onClick={handleClick}>Text anzeigen</button>
            <button  className ='btn btn-reset'onClick={clear}>Clear</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ModalApp;
