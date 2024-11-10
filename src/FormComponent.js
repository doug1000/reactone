import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import './Form.css';

const FormComponent = () => {
 
  const [name, setName] = useState('');
  const [kdnr, setKdnr] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost/Api/addData.php', { name, kdnr });
      alert(response.data.message);
      window.location.reload();
    } catch (error) {
      console.error('Fehler beim Senden der Daten', error);
      alert('Fehler beim Senden der Daten');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>

        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Kundennummer (kdnr):</label>
          <input
            type="text"
            value={kdnr}
            onChange={(e) => setKdnr(e.target.value)}
            required
          />
        </div>
        <button type="submit">Eintrag hinzufügen</button>
      </form>
    </div>
  );

};

export default FormComponent;
