import React from 'react'
import { Bookmark } from 'lucide-react';

const Card = (props) => {
  console.log(props);
  return (
    
     <div className="card">
      <div className="top">
        <img src={props.Logo}  />
        <button>Save<Bookmark size={10} /></button>
      </div>
      <div className="center">
    <h3>{props.Company}<span>{props.Date}</span></h3>
    <h2>{props.Post}</h2>
    <div className='tag'>
      <h4>{props.Tag1}</h4>
      <h4>{props.Tag2}</h4>

    </div>
      </div>
      <div className="bottom">
<div>
 
    <h3>${props.Pay}/hr</h3>
    <p>{props.Location}</p>

  <button onClick={()=>alert(`Do you really want to apply to ${props.Company}?`)}>Apply Now</button>
</div>
      </div>
    </div>
  )
}

export default Card