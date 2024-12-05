import React,{useState} from 'react'
import {z} from 'zod';

const Validation = () => {
    const [formData,setFormData]=useState({
        email:"",
        password:""
    })

    const [errors,setErrors]=useState({})

    const zodSchema=z.object({
        email:z.string().email("Invalid Email"),
        password:z.string().min(6,"Password must be minimum 6 digit atleast")
    })

    function handleChange(e){
        setFormData({...formData,[e.target.name]:e.target.value})
    }

    function Submit(e){
        e.preventDefault();

        const check=zodSchema.safeParse(formData)
        if(!check.success){
            setErrors(check.error.formErrors.fieldErrors)
        }
        console.log("submit")
    }
    

  return (
    <div className='min-h-screen flex justify-center items-center'>
        <form onSubmit={Submit} className='flex flex-col gap-2'>
            <input type="email" placeholder="enail" name="email" value={formData.email} onChange={handleChange} className='p-2 outline-none border border-blue-300'/>
            <p className='text-red-700 font-medium'>{errors.email}</p>
            <input type='password' placeholder='password' name="password" value={formData.password} onChange={handleChange} className='p-2 outline-none border border-blue-300'></input>
            <p className='text-red-700 font-medium'>{errors.password}</p>
            <input type="submit" className='bg-blue-700 text-white rounded-md p-1' />
           
        </form>
    </div>
  )
}

export default Validation