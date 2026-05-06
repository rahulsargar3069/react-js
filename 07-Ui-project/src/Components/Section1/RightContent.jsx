import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div id="right" className=' p-2 w-3/4 flex gap-2 overflow-x-auto flex-nowrap '>
     {props.users.map(function(elem,idx){
        return <RightCard
        key={idx}
        id={idx}
        color={elem.color}
        intro={elem.intro}
        img={elem.img}
        tag={elem.tag}
        />
     })}
    </div>
  )
}

export default RightContent
