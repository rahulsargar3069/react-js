import React, { useEffect, useState } from 'react'
import axios from "axios";
import Card from './Components/Card';

const App = () => {

  const [data, setData] = useState([])
  const [index, setIndex] = useState(1)

  const getData = async () =>{
   const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)
   setData(response.data)
  }
  
  useEffect(function(){
    getData()
  },[index])

  let printUserData = <h3 
  className='text-gray-600 text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
  >loading...</h3>

  if(data.length>0){
    printUserData = data.map(function(elem,idx){
      return <div key={idx}>
       <Card  elem={elem}/>
       </div>
    })
  }

  return (
    <div className='p-5 overflow-auto'>

      <div className=' mt-5 flex flex-wrap gap-2'>
        {printUserData}
      </div>

      <div className='mt-5 flex gap-5 justify-center items-center'>
        <button 
        style={{opacity: index == 1 ? 0.5 : 1}}
         className='bg-amber-300 px-5 py-2 rounded-3xl font-bold'
         onClick={()=>{
          if(index>1){
            setIndex(index-1)
            setData([])
          }
         }}>Prev</button>
         <h4 className='font-bold'>Page {index}</h4>
        <button 
         className='bg-amber-300 px-5 py-2 rounded-3xl font-bold'
         onClick={()=>{
          setData([])
          setIndex(index+1)
         }}>Next</button>
      </div>
    </div>
  )
}

export default App
