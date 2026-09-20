import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Card from './Componuts/Card';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-amber-400 text-6xl'>HELLO BUDDY I AM NICE !</h1>
     
     <Card userName="tirth" btnText="clicked me"/>
     <Card userName="gopal" btnText='piz clicke me'/>      
  
    </>
  )
}

export default App
