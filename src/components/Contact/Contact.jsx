import React from 'react'

const Contact = () => {
  return (
   
    <div  className=' dark:bg-black dark:text-white min-h-[100vh]'> 
    <div className='w-[70%] mx-auto py-6'>

   
     <h1 className='text-3xl md:text-5xl mb-3 text-center'>Come And Say Hi!</h1>
     <p className='text-2xl md:text-3xl text-center mb-5 text-gray-500'> I am always up for chat . Feel free to reach out to me </p>
     <div className='flex flex-col md:flex-row '>
     <div className='flex flex-col md:flex-row w-full md:w-[50%] '>
        <form className='flex flex-col gap-4 w-full mx-auto py-5'>
            <div className='w-full flex flex-col'>
            <label>Your name </label>
             <input className='border px-2 py-1 rounded-md dark:bg-slate-200' type='text' placeholder='Name'></input>

            </div>
            <div className='w-full flex flex-col'>
            <label>Your email</label>
            <input className='border px-2 py-1 rounded-md dark:bg-slate-200' type='email' placeholder='Email'></input>

            </div>
            <div className='w-full flex-col'>
            <label>Your Message</label>
            <textarea className='border px-2 py-1 w-full rounded-md dark:bg-slate-200' rows={5} placeholder='Write your message here' ></textarea>
                
            </div>
          
             <button className=' w-[60%] md:w-[30%] py-2 rounded-md mx-auto cursor-pointer bg-gray-700 text-white'> Send Message</button>
        </form>
         
    </div>
     <div className='w-full md:w-[50%] flex justify-start md:px-20'>
        <img  className='h-[360px] w-full ' src='https://assets-global.website-files.com/655bb410f0cd7fbb18c90b02/655d7905bd78192ae599535d_cat%20ninja%20mailer.gif'/>
     </div>



     </div>

   
     
    </div>
         </div>
  )
}

export default Contact