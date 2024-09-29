import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
    <div className="w-full h-screen duration-200"
    style = {{backgroundColor: color}}>
    </div>

    <div className="fixed flex flex-wrap
    justify-center bottom-12 inset-x-0 px-2">
      <div className="flex flex-wrap justify-center
      gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">
        <button 
        onClick = {()=> setColor("red")}
        className=" outline-none px-4
        py-1 rounded-full text-white"
        style = {{backgroundColor: "red"}}>Red</button>
        <button 
        onClick = {()=> setColor("BLACK")}
        className=" outline-none px-4
        py-1 rounded-full text-white"
        style = {{backgroundColor: "black"}}>Black</button>
        <button 
        onClick = {()=> setColor("GREEN")}
        className=" outline-none px-4
        py-1 rounded-full text-white"
        style = {{backgroundColor: "Green"}}>Green</button>
        <button 
        onClick = {()=> setColor("LAVENDER")}
        className=" outline-none px-4
        py-1 rounded-full text-white"
        style = {{backgroundColor: "lavender"}}>Lavender</button>
        <button 
        onClick = {()=> setColor("GRAY")}
        className=" outline-none px-4
        py-1 rounded-full text-white"
        style = {{backgroundColor: "gray"}}>Gray</button>
        <button 
        onClick = {()=> setColor("BLUE")}
        className=" outline-none px-4
        py-1 rounded-full text-white"
        style = {{backgroundColor: "Blue"}}>Blue</button>
        <button 
        onClick = {()=> setColor("pink")}
        className=" outline-none px-4
        py-1 rounded-full text-white"
        style = {{backgroundColor: "pink"}}>Pink</button>
      </div>
    </div>
    </>
  )
}

export default App
