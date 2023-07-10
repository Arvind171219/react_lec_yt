import React,{useRef} from 'react'
import User from './User'

export default function App() {
  let inputRef = useRef(null)
  function updateInput(){
    inputRef.current.value = "1000";
    inputRef.current.style.color = "red"
  }
  return (
    <div className='App'>
      <h1>forwardRef in React</h1>
      <User ref ={inputRef}/>
      <button onClick={updateInput}>Update InputBox</button>
    </div>
  )
}
