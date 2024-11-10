import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './App.css';

function NaviApp() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><a href="https://copilot.microsoft.com" target="_blank" rel="noopener noreferrer">Copilot</a></li>
            <li><a href="https://outlook.com" target="_blank" rel="noopener noreferrer">Outlook.com</a></li>
          </ul>
        </nav>
        
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function Copilot() {
  return <h2>Copilot</h2>;
}

export default NaviApp;
