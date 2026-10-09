import React, {useState} from 'react'

const Login = () => {

  const [currentState,setCurrentState]=useState("Sign Up")

  return (
   <form action="" className='flex flex-col items-center text-gray-800'>
    <div>
      <p className=''>{currentState}</p>
      <hr className='' />
    </div>
    <input type="text" className='w-full px-3 py-2 border border-gray-800' placeholder='Name' />

   </form>
  )
}

export default Login