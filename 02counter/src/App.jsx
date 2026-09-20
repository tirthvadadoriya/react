import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [counter, setcounter] = useState(5);

  const addvalue = () => {
    if(counter<20){
    setcounter(counter + 1);
    }
  };

  const removevalue = () => {
    if(counter>0){
    setcounter((prev) => prev - 1);
    }
  };

  return (
    <>
      <h1>hi my name is tirth</h1>
      <h3>your count is {counter}</h3>
      <button onClick={addvalue}>add value</button>
      <br />
      <button onClick={removevalue}>remove value</button>
    </>
  );
}

export default App
