import React, { useState } from 'react'

const StarRating = ({stars=5}) => {
    const [star,setStar]=useState();
    const [hover,setHover]=useState(0);


  return (
    <div>
        {new Array(stars).fill(0).map((item,index)=>(
            <span key={index} className={`text-4xl ${hover ===0 && index<star || index<hover ?"text-yellow-300":""}`} onClick={()=>{setStar(index+1)}} onMouseEnter={()=>{setHover(index+1)}} onMouseLeave={()=>{setHover(0)}}>&#9733;</span>
        ))}
    </div>
  )
}

export default StarRating