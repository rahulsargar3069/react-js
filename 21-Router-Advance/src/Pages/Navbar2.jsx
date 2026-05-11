import React from 'react'
import { useNavigate } from 'react-router-dom'
const Navbar2 = () => {
    
  const navigate = useNavigate()

  
  return (
    <div className='w-full bg-gray-500 p-5'>
      <button 
      onClick={()=>{
        navigate('/')
       }} 
       className='bg-blue-500 text-white px-5 font-bold py-2 ml-5 rounded-2xl active:scale-95'>
       Return to home
       </button>

       <button 
      onClick={()=>{
        navigate(-1)
       }} 
       className='bg-blue-500 text-white px-5 font-bold py-2 ml-5 rounded-2xl active:scale-95'>
       Back
       </button>

       <button 
      onClick={()=>{
        navigate(+1)
       }} 
       className='bg-blue-500 text-white px-5 font-bold py-2 ml-5 rounded-2xl active:scale-95'>
       Next
       </button>
    </div>
  )
}

export default Navbar2
