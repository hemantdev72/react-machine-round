import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoList from './TodoList'
import Form from './components/Form'
import Timer from './components/Timer'
import Validation from './components/Validation'
import Modal from './components/Modal'
import Drag from './components/Drag'
import Faq from './components/Faq'

function App() {
  const [count, setCount] = useState(0)
  const [open,setOpen]=useState(true)

  return (
   <div className='flex justify-center mt-20 h-[100vh]' >
    {/* <TodoList /> */}
    {/* <Form /> */}
    {/* <Timer /> */}
    {/* <Validation /> */}
    {/* <Drag /> */}
    <Faq />
   {/* <div><Modal open={open} setOpen={setOpen} />
    <button onClick={()=>{setOpen(true)}}>Open</button></div> */}

   </div>
  )
}

export default App
