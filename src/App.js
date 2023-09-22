import logo from './logo.svg';
import './App.css';

import { useState } from 'react';

// import bulb_on from './pic_bulbon.gif'
// import bulb_off from './pic_bulboff.gif'

// function app() {}
function App() {

  const [btText, setBtText] = useState("on");

  const myFunction = () => {
    console.log("myFunction")
    const img = document.getElementById("demo");
    //const bt = document.getElementById("bt");
    console.log(img.src)

    if (img.src.includes("pic_bulboff.gif")) {
        img.src = "pic_bulbon.gif";

        //bt.innerHTML = "off"
        setBtText("off")
    } else {
        img.src = "pic_bulboff.gif";
        
        //bt.innerHTML = "on"
        setBtText("on")
    }

  }

  return (
    <div className="App">
      <header className="App-header">

        <h1>This is a heading</h1>
        <p>This is a paragraph.</p>

        <button onClick={myFunction} >{btText}</button>
        <br/>

        <img id="demo" src="pic_bulboff.gif" />

      </header>
    </div>
  );

}

export default App;
