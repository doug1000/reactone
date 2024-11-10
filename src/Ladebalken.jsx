import React, { useState, useEffect } from 'react';
import './App.css';
//import balken from './Vp3R.gif';
import kreis from './WMDx.gif';

const LoadingComponent = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simuliere einen API-Call
    setTimeout(() => {
      setLoading(false);
    }, 5000); // 5 Sekunden Verzögerung
  }, []);

  if (loading) {
    return <div><img src={kreis} alt ="Loading" /></div>;
    //<img src={balken} alt ="Loading" />
  }

  return (
    <div>
      <h1>Welcome to <br/>Andreas Christ's Homepage'</h1>
    </div>
  );
};

export default LoadingComponent;
