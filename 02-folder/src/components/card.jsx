import React from 'react'

function card(props) {
  return (
      <div className="Card">
        <img src={props.img} alt="" srcset="" />
        <h1>{props.user} , {props.age}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis dolor dolorem magnam, exercitationem a aliquam accusamus recusandae ducimus fugiat possimus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, hic!</p>
         <button>Click Me !!</button>
      </div>
  )
}

export default card


