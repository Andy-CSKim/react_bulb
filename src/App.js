import logo from './logo.svg';
import './App.css';

import { useState } from 'react';

// import bulb_on from './pic_bulbon.gif'
// import bulb_off from './pic_bulboff.gif'

// function app() {}
function App() {

  const [title, setTitle] = useState("Bulb is off");
  const [imgSrc, setImgSrc] = useState("pic_bulboff.gif");

  // to see how often the component is rendered
  console.log(`App rendered : ${imgSrc}`);

  function turnOn() {
    console.log("turn on");
    setTitle("Bulb is on");
    setImgSrc("pic_bulbon.gif");
  }
  function turnOff() {
    console.log("turn off");
    setTitle("Bulb is off");
    setImgSrc("pic_bulboff.gif");
  }

  return (
    <div className="App">
      <header className="App-header">

        <h1>{title}</h1>

        <button onClick={turnOn} >turn on</button>
        <button onClick={turnOff} >turn off</button> <br />
        <img src={imgSrc} />

      </header>
    </div>
  );

}

export default App;
