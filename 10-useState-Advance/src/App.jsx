import React, { useState } from 'react'

const App = () => {

  // const [num, setNum] = useState([10,20,30])
  // const changeNum = () => {
  //   const newArr = [...num]
  //   newArr.push(99)
  //   setNum(newArr)
  // }


  //Batch handling
  const [num, setNum] = useState(10)
  const btnClicked = () => {
    setNum (prev => (prev+1) )
    setNum (prev => (prev+1))
  }

  return (
    <div>
      <h1>Num {num}</h1>
      <button onClick={btnClicked}>Click</button>
    </div>
  )
}

export default App
