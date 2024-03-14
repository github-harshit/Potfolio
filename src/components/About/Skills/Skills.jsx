import React from 'react'

const Skills = () => {
    
  return (
    <div className='dark:bg-black dark:text-white'>
    <h1 className='text-5xl mb-5'> Skills </h1>
    <div className='flex flex-col md:flex-row gap-10 w-full md:justify-between md:items-center flex-wrap '>
       <ProgressBar label={"HTML,CSS,Javascript"} value={95}/>
       <ProgressBar label={"React, Next.js"} value={90}/>
       <ProgressBar label={"Node.js, Express.js"} value={75}/>
       <ProgressBar label={"MongoDB, PostGres"} value={75}/>
       <ProgressBar label={"Redux, ReactQuery"} value={75}/>
       <ProgressBar label={"UI Design"} value={65}/>
       <ProgressBar label={"DSA, Algorithms"} value={80}/>
       <ProgressBar label={"Git, Github"} value={95}/>
    
    </div> 
    </div>
  )
 
}
 const ProgressBar = ({label, value})=>{
     
   
     return <>
      <div className='flex flex-col w-[80%] mx-auto md:w-[47%] dark:text-white'>
        <div className='flex justify-between p-2 items-center '>
          <span className='text-lg  font-medium dark:text-white'>{label}</span> <span className='text-md font-medium dark:text-white'>{value}%</span>
        </div>
        <div className='w-full rounded-full  h-[1.2rem] bg-slate-200 dark:bg-slate-200'>
           <div style={{ width: `${value}%`}} className={`h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500  `}></div>
           </div>

      </div>
     </>
 }

export default Skills