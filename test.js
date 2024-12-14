const input=document.querySelector(".input");

function cb(e){
    console.log(e.target.value);
}


function debounce(fn,wait){
    let timer;
    return (e)=>{
        if(timer) {
            clearTimeout(timer);
        }
        timer=setTimeout(()=>{
            fn(e)
        },wait)
    }
}

const db=debounce(cb,400)

input.addEventListener("input",db)