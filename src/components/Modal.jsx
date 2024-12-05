// import React from 'react'
import { useRef } from 'react';
import useModalClose from '../hooks/useModalClose';

const Modal = ({open,setOpen}) => {
    if(!open){
        return null;
    }

    const modalRed=useRef();

    useModalClose(modalRed,setOpen);

  return (
    <div ref={modalRed} className='w-[300px] border border-black p-2 rounded-md'>
        <p className=''>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis quae eveniet deserunt inventore quisquam alias corrupti obcaecati at voluptatum, totam blanditiis nihil suscipit sit laudantium, officiis doloremque non accusamus optio?</p>
        <button className='bg-blue-300 p-1 rounded-md' onClick={()=>{setOpen(false)}}>close</button>
    </div>
  )
}

export default Modal