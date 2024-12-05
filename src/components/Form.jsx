import React from 'react'
import { useForm } from 'react-hook-form'

const Form = () => {
  const {register,handleSubmit,formState}=useForm({
    email:"",
    username:"",
    password:""
  })

  const {errors}=formState;

  function handle(data){
    console.log(data);
  }
    

  return (
    <div>
        <form onSubmit={handleSubmit(handle)}>
          <div>
          <label>username</label>
          <input type="text" {...register("username",{
            required:"Username is mandatory"
          })}/>
          <p>{errors?.username?.message}</p>
          </div>
          <div>
          <label>email</label>
          <input type="text" {...register("email")} />
          </div>
          <div>
          <label>password</label>
          <input type="text" {...register("password")} />
          </div>
          <button type='submit'>Submit</button>
         
        </form>
    </div>
  )
}

export default Form