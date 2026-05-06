import React from 'react'
import { ArrowRight } from 'lucide-react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  return (
    <div className=' relative shrink-0 h-full overflow-hidden w-80 rounded-4xl '>
      <img className='h-full w-full object-cover' src={props.img}  />
      <RightCardContent id={props.id} intro={props.intro} color={props.color} tag={props.tag}/>
    </div>

  )
}

export default RightCard
