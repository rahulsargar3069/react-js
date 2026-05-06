import React from 'react'
import { useState } from 'react'

const App = () => {
  
  const [a, setA] = useState(0)
  function increaseNum(){
    setA(a+1)
  }
  function decreaseNum(){
    setA(a-1)
  }
  return (
    <div>
      <h1>{a}</h1>
      <button onClick={increaseNum}>Increasing</button>
      <button onClick={decreaseNum}>Decreasing</button>
    </div>
  )
}
export default App
