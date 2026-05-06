import { Bookmark } from "lucide-react";
import React from 'react'

const Card = (props) => {
  return (
    <div>
       <div className="Card">
        <div className="top">
          <img src={props.logo} alt="" srcset="" />
          <button>Save <Bookmark className="Bookmark-icon"/></button>
        </div>
        <div className="center">
          <h3>{props.company}<span>{props.datePosted}</span></h3>
          <h2>{props.post}</h2>
          <div className="job-type">
            <h4>{props.tag1}</h4>
            <h4>{props.tag2}</h4>
          </div>
        </div>
        <div className="bottom">
          <hr />
          <div className="bottom-details">
          <div className="cost-place">
          <h2>{props.pay} </h2>
          <p>{props.location}</p>
          </div>
          <button>Apply Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
