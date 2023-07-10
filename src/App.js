import React from 'react'
import { useRef } from 'react'

export default function App() {
  let inputRef = useRef(null)
  function handlesInput(){
  console.warn("function call")
  inputRef.current.value ="1000000"
  // inputRef.current.focus();
  // inputRef.current.style.color = "red"
  inputRef.current.style.display = "none"
  }
  return (
    <div className='App'>
      <h1> useRef in React </h1>
      <input type="text" ref={inputRef} />
      <button onClick={handlesInput}>Handles Input</button>
    </div>
  )
}
