import { retry } from '@reduxjs/toolkit/query'
import React, { useEffect, useRef, useState } from 'react'

const Timer = ({total}) => {
    const [isRunning,setIsRunning]=useState(false)
    const check=useRef(null)
    
    const [time,setTime]=useState({
        hour:0,
        minute:0,
        second:0
    })

    const handleChange=(e,type)=>{
        const value=parseInt(e.target.value,10) || 0;
        const copy={...time};

        copy[type]=value;

        copy.minute += Math.floor(copy.second/60)
        copy.second = Math.floor(copy.second%60);

        copy.hour += Math.floor(copy.minute/60);
        copy.minute = Math.floor(copy.minute%60);

        setTime(copy);
    }

    const timer=()=>{
        setIsRunning(!isRunning);
    }

    function changeTime(){
        setTime((prev)=>{
            let {hour,minute,second}=prev;

            if(hour==0 && minute==0 && second==0){
                clearInterval(check.current)
                return {hour:0,minute:0,second:0}
            }

            second=second-1;
            if(second<0){
                minute=minute-1;
                second=59;

                if(minute<0){
                    hour=hour-1;
                    minute-59;

                    
                }
            }

            return {hour,minute,second};

        })
    }

    useEffect(()=>{
       
        if(isRunning){
            check.current=setInterval(() => {
                changeTime();
            }, 1000);
        }

        return ()=>{
            clearInterval(check.current)
        }
    },[isRunning])


    return(
        <div>
        <div>
        <input placeholder='HH' value={time.hour} onChange={(e)=>{handleChange(e,"hour")}}  /> :
            <input placeholder='MM' value={time.minute}  onChange={(e)=>{handleChange(e,"minute")}}/> :
            <input placeholder='SS' value={time.second} onChange={(e)=>{handleChange(e,"second")}}/>
        </div>
        <button onClick={timer}>Start</button>
        </div>
    )
}

export default Timer;