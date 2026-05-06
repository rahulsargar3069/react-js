import React from 'react'
import { ArrowRight } from 'lucide-react'


const RightCardContent = (props) => {
  return (
    <div>
      <div className='absolute top-0 left-0 h-full w-full bg-gray-200/30 flex flex-col justify-between p-4'>
        <h1 className=' font-bold h-10 w-10 rounded-full bg-white text-center flex items-center justify-center'>{props.id+1}</h1>
        <div>
            <p className='font-bold mb-10 text-white'>{props.intro}</p>
             <div style={{backgroundColor:props.color}} className=' text-white flex font-bold justify-between  px-5 rounded-4xl py-2'>
                <button >{props.tag} </button>
                <ArrowRight size={30} />
             </div>
        </div>
      </div>
    </div>
  )
}

export default RightCardContent
