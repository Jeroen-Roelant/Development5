import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

const App = () => {
  const [myNumber, setMyNumber] = useState(0);

  function getRndInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1) ) + min;
    }

  function myRandom() {
    setMyNumber(getRndInt(1, 10));
      console.log(myNumber);
  }

  return (
    <div className="App">
      <h1 className={myNumber === 3 ? "green" : myNumber === 7 ? "red" : ""}>{myNumber}</h1>
      <button onClick={myRandom}>
          Click me to play
      </button>
    </div>
  );
}



export default App;
