import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])

  const fileHandling = (e) =>{
    e.preventDefault()

    const copyTask = {title,details}
    setTask([...task ,copyTask])

    
    setTitle('')
    setDetails('')
  }

  const deleteNote = (idx)=>{
    const copyTask = [...task]
    copyTask.splice(idx,1)
    setTask(copyTask)
  }
  return (
    <div className='h-screen lg:flex'>
      <form onSubmit={(e)=>{fileHandling(e)}} 
      className='p-5 flex gap-4 flex-col lg:w-1/2'>
        
      <h1 className='font-bold text-2xl '>Enter Notes</h1>
        
      <input 
        value={title}
        onChange={(e)=>{ setTitle(e.target.value) }}
        className='rounded-3xl  p-3 font-bold text-2xl '
        type="text" 
        placeholder='Enter Heading'/>
        
      <textarea 
        value={details}
        onChange={(e)=>{setDetails(e.target.value) }}
        className='rounded-3xl h-40  p-3 font-bold text-2xl '
        placeholder='Enter Details'></textarea>
        
      <button
       className='bg-green-900 text-white  text-2xl p-4 rounded-3xl'>
       Add Note
      </button>

      </form>

      <div className='bg-amber-500  h-screen w-full p-10 overflow-auto'>
        <h1 className='font-bold text-2xl mb-5' >Recent Notes</h1>
        <div className='flex flex-wrap'>
         {task.map(function(elem,idx){
          return <div key={idx} className='bg-white h-60 w-45 p-5 flex flex-col justify-between rounded-3xl m-5'>
            <h3 className='font-bold text-2xl'>{elem.title}</h3>
            <p className='font-medium text-gray-700 '>{elem.details}</p>
            <button onClick={()=>{
              deleteNote(idx)
            }}
            className='bg-red-500 px-10 py-2 rounded-3xl '>Delete</button>
          </div>
          })}
        </div>
      </div>

    </div>
  )
}

export default App
