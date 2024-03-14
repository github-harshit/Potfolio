import React from 'react'; 
import { ReactTyped } from "react-typed";
import { useNavigate } from 'react-router-dom';

const Intro = () => {
   const navigate = useNavigate(); 
  return (

    <>
    <div className='px-7 py-40  md:p-20 dark:bg-black dark:text-white h-[100vh]  ' >
      <h1 className='text-5xl md:text-9xl font-bold' >Harshit Joshi</h1>
       <h1 className='text-xl md:text-5xl font-500 px-2'> {"I am "}  
       <ReactTyped
       strings={[
        "frontend web developer",
        "full stack web developer",
        "software developer"
        
      ]}
      typeSpeed={70}
      backSpeed={60}
     
      loop
    >
      <input  className='dark:bg-black dark:text-red-200' type="text" />
    </ReactTyped> 
    </h1>
     <div>
      <button onClick={()=> navigate("/about") } className=' px-4 py-2 mt-5 mx-2  bg-gradient-to-r from-purple-500 to-pink-500 rounded-md dark:text-black '> About Me </button>

     </div>
     
    </div>
  
    <div>



       
    </div>
    </>
  )
}

export default Intro