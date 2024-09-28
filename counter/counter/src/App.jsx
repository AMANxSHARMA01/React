import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter, setCounter] = useState(3)

  //let counter = 75

  const addValue =() => {
  if (counter < 20) {
     setCounter (counter + 1)
    }else{
      alert("Value should be less than 20")
    }
  }

  const removeValue = ()=> {

    if(counter < 1){
      alert("Value should be more than 1")
    }else{
      setCounter(counter - 1)
  }
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
