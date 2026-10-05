import React from 'react'

const NewsLetterBox = () => {

    const onSumitHandler=(event)=>{
     event.preventDefault();    //on submit the form , it will not reload the page 
    }


  return (
    <div className=' text-center'>
        <p className=' text-2xl font-medium text-gray-800'>Subscribe now & get 20% off</p>
        <p className='text-gray-400 mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, soluta magnam? Tempore laudantium, deleniti architecto non nulla doloribus dignissimos aliquam excepturi nam voluptatum obcaecati, similique ad repellat magni ab. Recusandae.</p>
   <form onSubmit={onSumitHandler} className='w-full sm:w-1/2 flex item-center gap-3 mx-auto  my-6 border pl-3' action="">
    <input className='w-full sm:flex-1 outline-none' type="email" placeholder='Enter your email' required />
    <button type='Submit' className='bg-black text-white  text-xs px-10 py-4'>SUBSCRIBE </button>
   </form>
    </div>
  )
}

export default NewsLetterBox