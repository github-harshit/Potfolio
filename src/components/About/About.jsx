import React from 'react'
import Skills from './Skills/Skills'
const About = () => {
  return (
    <div className=' dark:bg-black  py-10 flex flex-col gap-5'>
          
        <div className='w-[90%] md:w-[70%] mx-auto dark:text-white' >
        <h1 className='text-5xl mb-5'> Intro </h1>
           
             <p className='text-lg font-medium sm:text-xl md:text-2xl xl:text-3xl'>  Hi, I am Harshit Joshi, a 22-year-old Computer Science Engineer. I love building websites and solving tricky problems in the world of computers.</p>
             <p className='text-lg font-medium sm:text-xl md:text-2xl xl:text-3xl' >Beyond web development, I enjoy tackling tough challenges in computer science.
             I like to dig deep into complicated problems and come up with smart solutions</p> 
            
            
        </div>
         <div className='w-[90%] md:w-[70%] mx-auto dark:text-white'>
            <h1 className='text-5xl mb-5'> Stats </h1>
             <div className='flex flex-col md:flex-wrap md:flex-row md:justify-between md:items-center text-lg md:text-xl font-semibold   text-gray-700 dark:text-gray-700 gap-6 md:gap-3 lg:gap-6 h-[20rem] md:h-24   '>
                 <div className='dark:bg-slate-100 bg-gray-200 w-full md:w-[45%] lg:w-1/5 h-[4rem] md:h-full rounded-md flex flex-col items-center justify-center hover:bg-sky-300 dark:hover:bg-red-300'>
                   <p className='font-extrabold text-2xl md:text-3xl'>10+</p>
                   <p> Verified Skills</p>
                 </div>
                 <div className='dark:bg-slate-100 bg-gray-200 w-full md:w-[45%] lg:w-1/5 h-[4rem] md:h-full rounded-md flex flex-col items-center justify-center hover:bg-sky-300 dark:hover:bg-red-300'  >
                 <p className='font-extrabold text-2xl md:text-3xl' >5+</p>
                 <p>Professional Projects</p>

                 </div>
                  <div className='dark:bg-slate-100 bg-gray-200 w-full md:w-[45%] lg:w-1/5  h-[4rem]  md:h-full rounded-md flex flex-col items-center justify-center hover:bg-sky-300 dark:hover:bg-red-300 ' >
                    <p className='font-extrabold text-2xl md:text-3xl' >700+</p>
                    <p>DSA problems solved</p>
                  </div>
                  <div className='darK:bg-slate-100 bg-gray-200 w-full md:w-[45%] lg:w-1/5 h-[4rem] md:h-full rounded-md flex flex-col items-center justify-center hover hover:bg-sky-300 dark:hover:bg-red-300' >
                     <p className='font-extrabold text-2xl md:text-3xl' >2+</p>
                     <p>Clients Closed</p>
                     
                  </div>
             </div>
         </div>

         <div className='w-[90%] md:w-[70%] mx-auto' >
            <Skills/>
         </div>
        
         <div className='w-[90%] md:w-[70%] mx-auto dark:text-white'>
          <h1 className='text-5xl mb-5'>Interests</h1>
          <div className='flex flex-col md:flex-wrap md:flex-row md:justify-between md:items-center text-lg md:text-xl font-semibold   text-gray-700 dark:text-gray-700 gap-6 md:gap-3 lg:gap-6 h-[20rem] md:h-24   '>
                 <div className='dark:bg-slate-100 bg-gray-200 w-full md:w-[45%] lg:w-1/5 h-[4rem] md:h-full rounded-md flex flex-col items-center justify-center hover:bg-sky-300 dark:hover:bg-red-300'>
                   <p className='font-extrabold text-2xl md:text-2xl'>Technology </p>
                   
                 </div>
                 <div className='dark:bg-slate-100 bg-gray-200 w-full md:w-[45%] lg:w-1/5 h-[4rem] md:h-full rounded-md flex flex-col items-center justify-center hover:bg-sky-300 dark:hover:bg-red-300'  >
                 <p className='font-extrabold text-2xl md:text-2xl' > Negotiation  </p>
                 

                 </div>
                  <div className='dark:bg-slate-100 bg-gray-200 w-full md:w-[45%] lg:w-1/5  h-[4rem]  md:h-full rounded-md flex flex-col items-center justify-center hover:bg-sky-300 dark:hover:bg-red-300 ' >
                    <p className='font-extrabold text-2xl md:text-2xl' >Startup</p>
                    
                  </div>
                  <div className='darK:bg-slate-100 bg-gray-200 w-full md:w-[45%] lg:w-1/5 h-[4rem] md:h-full rounded-md flex flex-col items-center justify-center hover hover:bg-sky-300 dark:hover:bg-red-300' >
                     <p className='font-extrabold text-2xl md:text-2xl' >Philosophy </p>
                    
                     
                  </div>
             </div>
          
         </div>

    </div>
  )
}

export default About