import { User } from 'lucide-react';
import React from 'react'

const Cards = (props) => {
  return (
    <div >
        <div className="Card">
            <div className="Top" >
                {props.isAvailable && <button>available</button>}
               <h2 style={{ marginLeft: "auto" }}>{props.pay}</h2>
           </div>
            <div className="Center01">
                <img src={props.img} alt="" srcset="" />
                <h1>{props.fullName}</h1>
                <h5>{props.role}</h5>
                <h3>{props.type}</h3>
            </div>
            <div className="Center02">
                <h4>{props.skill1}</h4>
                <h4>{props.skill2}</h4>
                <h4>{props.skill3}</h4>
                <h4 className='Num'>{props.skillNum}</h4>
            </div>
            <div className="Bottom">
                <p>{props.bio}</p>
                <h2>VIEW PROFILE</h2>
            </div>
        </div>
       
    </div>
  )
}

export default Cards
