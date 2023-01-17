import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react'

function App() {
  const DFM_URL = process.env.REACT_APP_DFM_Link
  const REACT_URL = process.env.REACT_APP_ICM_Link

  useEffect(() => {
    console.log("usefeffect")
    console.log("React URL", REACT_URL)
    console.log("DFM", DFM_URL)
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.

        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
