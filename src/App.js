import logo from './logo.svg';
import './App.css';

import { useState, useRef } from 'react';

// import bulb_on from './pic_bulbon.gif'
// import bulb_off from './pic_bulboff.gif'

// App() is a component while app() is a function
// function app() 

function App() {

  const [title, setTitle] = useState("Bulb is off");
  const [imgSrc, setImgSrc] = useState("pic_bulboff.gif");
  //const [name, setName] = useState("");
  const name = useRef("");
  let my_value = 0;

  // to see how often the component is rendered
  //console.log(`React enter App() to render : imgSrc=${imgSrc}, name=${name}, count=${my_value}`);
  console.log(`React enter App() to render : imgSrc=${imgSrc}, name=${name.current}, count=${my_value}`);

  function turnOn() {
    my_value++;
    console.log(`turn on : count=${my_value}`);
    setTitle("Bulb is on");
    setImgSrc("pic_bulbon.gif");
  }
  
  function turnOff() {
    my_value--;
    console.log(`turn off : count=${my_value}`);
    setTitle("Bulb is off");
    setImgSrc("pic_bulboff.gif");
  }
  
  
  return (
    <div className="App">
      <header className="App-header">

        <h1>{title}</h1>

        <button onClick={turnOn} >turn on</button>
        <button onClick={turnOff} >turn off</button> <br />
        {/* <input type="text" onInput={e => setName(e.target.value)} /><br/> */}
        <input type="text" onInput={e => name.current = e.target.value} /><br/>
        <img src={imgSrc} />

      </header>
    </div>
  );

}

export default App;
