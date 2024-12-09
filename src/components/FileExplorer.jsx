import { useState } from "react";
function FileExplorer({data}){
    const [open,setOpen]=useState(false);

    function handleClick(){
        setOpen(!open)
    }

    return (
        <div className="border border-l-black pl-2">
            <h1 onClick={()=>{setOpen(!open)}}>{data?.type==="folder"?"📁":"🗄"}<span className="mr-2" >{data?.name}</span></h1>
            {open && data?.children?.map((childData, index) => {
          return <FileExplorer key={index} data={childData} />;
        })}
        </div>
    )

}

export default FileExplorer;