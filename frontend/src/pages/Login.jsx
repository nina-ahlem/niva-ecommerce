import React, {useState} from 'react'

const Login = () => {

  const [currentState,setCurrentState]=useState("Sign Up")
  const onSubmitHandler =async(event)=>{
 event.preventDefault()
  }

  return (
   <form onSubmit={onSubmitHandler} action="" className='flex flex-col items-center text-gray-800 sm:max-w-96 m-auto mt-14 gap-4'>
    <div className='inline-flex items-center gap-2 mb-2 mt-10'>
      <p className='prata-regular text-3xl'>{currentState}</p>
      <hr className='border-none h-[1.5px]  w-8 bg-gray-800' />
    </div>
    { currentState==="Login" ? " " : <input type="text" className='w-full px-3 py-2 border rounded border-gray-800' placeholder='Name' required/> }
    
    <input type="email" className='w-full px-3 py-2 border rounded border-gray-800' placeholder='Email' required/>
    
    <input type="password" className='w-full px-3 py-2 border rounded border-gray-800' placeholder='password' required/>
    <div className='w-full flex justify-between text-sm mt-[-8px]'>
      <p className='cursor-pointer'>Forgot your password?</p>
      {
        currentState==="Login" ?
        <p onClick={()=>setCurrentState("Sign Up")} className='cursor-pointer'>Create account</p> :
        <p onClick={()=>setCurrentState( "Login")} className='cursor-pointer'>Login </p>
      }
    </div>
    <button  className='mt-6  bg-black text-white rounded-full py-2 px-8 mt-4 font-semibold hover:bg-gray-800 active:bg-gray-700'>
      {
        currentState==="Login" ? "Sign In " : "Sign Up"
      }
      </button>

   </form>
  )
}

export default Login