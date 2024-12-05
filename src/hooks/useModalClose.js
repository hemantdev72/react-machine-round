import { useEffect } from "react";

export default function useModalClose(ref,setClose){
   useEffect(()=>{
        function cb(e){
            if(!ref.current?.contains(e.target)){
                setClose(false);
            }
        }
           document.addEventListener("click",cb);
           
           
        return()=>{
            document.removeEventListener("click",cb);
           }
    },[ref,setClose])   
}