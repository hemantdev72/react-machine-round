import React, { useEffect, useState,useRef } from 'react'

const InfiniteScroll = () => {
    const [data,setData]=useState([]);
    const [page,setPage]=useState(1);

    async function fetchPost(){
        const data=await fetch(`https://picsum.photos/v2/list?page=${page}&limit=3`);
        const res=await data.json();
        setData((prev)=>[...prev,...res])     
    }

    <div class="text-center m-t30 m-b20"><iframe width="100%" height="315" src="https://www.youtube.com/embed/DxH7GxLTJuc">
</iframe></div>

    useEffect(()=>{
        fetchPost();
    },[page]);

    const lastEle=useRef(null);

    useEffect(()=>{
        const observer=new IntersectionObserver((ele)=>{
            if(ele[0].isIntersecting){
                setPage((prev)=>prev+1);
            }
    })
   
    
    if(lastEle.current) observer.observe(lastEle.current);

    return ()=>{
        if(lastEle.current) observer.unobserve(lastEle.current);
       
    }
},[data])

  return (
    <div className='flex flex-col gap-2'>
        {data?.map((item,index)=>(
            <img src={item.download_url} ref={index===data.length?lastEle:null} className='img-all w-[500px] h-[400px]' />
        ))}
        <div className='indicator'>sadasd</div>
    </div>
  )
}

export default InfiniteScroll