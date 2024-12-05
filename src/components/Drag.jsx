import { useState ,useRef} from "react";

function Drag(){

    const item=useRef();
    const container=useRef();

    const wrt={
        todo:["todo1","todo2","todo3"],
        progess:["progress1","progress2"],
        complete:["complete"]
    }

    const [data,setData]=useState(wrt);


    const handleDrag=(e,it,cont)=>{
        item.current=it
        container.current=cont
    }

    const handleDrop=(e,cont)=>{
       
        setData((prev)=>{
            let it=item.current;
            let ct=container.current

            const newData={...prev};
            newData[ct]=newData[ct].filter((i)=>it!==i);
            newData[cont]=[...newData[cont],it];

            return newData;
        })
    }

    return <div className="flex gap-8 ">
        {Object.keys(data).map((heading,index)=>(
            <div className="bg-slate-400 p-4 " key={index} onDragOver={(e)=>{e.preventDefault()}} onDrop={(e)=>{handleDrop(e,heading)}}>{data[heading].map((subheading,idx)=>(
            <div className="bg-yellow-50 p-2 mt-1" key={idx} onDragStart={(e)=>handleDrag(e,subheading,heading)} draggable>{subheading}</div>
        ))}</div>
))}
    </div>
}

export default Drag;