import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter, setCounter] = useState(64)

  //let counter = 75

  const addValue =() => {
    counter = counter + 1 
    setCounter (counter)
    // console.log(counter);
  }
  const removeValue = ()=> {
    counter = counter - 1
    setCounter(counter)
    // console.log(counter);

  }
  

  return (
    <>
      <h1>Counter Value : {counter}</h1>
      <button
      onClick={addValue}
      >Add Value {counter}</button>
      <br/>
      <button
      onClick={removeValue}
      >Remove Value{counter}</button>
    </> 
  )
}

export default App
