import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='mb -inset-4 rounded-2xl bg-green-500
       text-black p-4'>Tailwind css</h1>
      <Card username = "Natelie Pandey" btnText = "Click Me"/>
      <Card username = "Natasha Srivastva"/>
    </>
  )
}

export default App
