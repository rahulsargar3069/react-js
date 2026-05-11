
import React, { useState } from 'react'
import axios from 'axios'

const App = () => {

  //FETCH METHOD :-
  // const getData = async () =>{
  //   const response = await fetch('https://jsonplaceholder.typicode.com/users')
  //   const data = await response.json()
  //   console.log(data)
  // }

  const [data, setData] = useState([])

  const getData = async () => {
    const response = await axios.get('https://picsum.photos/v2/list')
    setData(response.data)
  }

  return (
    <div>
     <button onClick={getData}>Click Me</button>
     {data.map(function(elem,idx){
      return <h3 key={idx}>Hello , {elem.author}{idx}</h3>
     })}
    </div>
  )
}

export default App
