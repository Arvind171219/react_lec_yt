import React,{useState} from 'react'

export default function App() {
  let [val,setVal] = useState("")
  let [item,setItem] = useState("")
  return (
    <div className='App'>
      <h1>Controlled Components</h1>
      <input type="text" value={val} onChange={(e)=>setVal(e.target.value)} />
      <input type="text" value={item} onChange={(e)=>setItem(e.target.value)} />
    </div>
  )
}
