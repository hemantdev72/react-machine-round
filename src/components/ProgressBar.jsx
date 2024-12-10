import React, { useEffect, useState } from 'react'

const ProgressBar = () => {

    const [progress,setProgress]=useState(0);
    const [start,setStart]=useState(false);

    useEffect(()=>{
        let timer
        if(start){
            timer=setInterval(()=>{
                setProgress((prev)=>{
                    if(progress>=100){
                        clearInterval(timer)
                    }
                    return Math.min(prev+5,100);
                })
            },1000)

        }
        return()=>{
            clearInterval(timer);
        }
    },[start])
    


  return (
    <div>
        <div className='w-[300px] overflow-hidden h-3 rounded-md'>
            <div  style={{ width: `${progress}%` }} className={`h-full bg-green-500 transition-all duration-75 ease-in`}></div>
        </div>
        <button onClick={()=>{setStart(true)}}>Start</button>
    </div>
  )
}

export default ProgressBar