import React from 'react'
import NetflixGpt from "../../assets/images/NetflixGpt.png";
import Nike from "../../assets/images/Nike.png"; 
import react from "../../assets/images/react.png";
import redux from "../../assets/images/redux.png"
import { FaGithub } from "react-icons/fa";
import { IoMdCloudOutline } from "react-icons/io";
const MyWork = () => {
  return (
    <div className=' dark:bg-black dark:text-white min-h-[100vh]'>
     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10 py-10   '>
       <div className='border border-gray-100  dark:border-white flex flex-col gap-3 items-center px-4 py-4 rounded-md shadow-lg '>
         <img className=' w-[100%] object-cover rounded-sm ' src={NetflixGpt}/>
         <h1 className='text-3xl font-semibold'>Netflix GPT</h1>
         <div className='text-xl'>
           React, Redux, OpenAI, FireBase, 
         </div>
        
        
         <p className='text-lg'>Netflix UI with latest movies and added  GPT functionalilty built for better AI recommendations if you are confused what to watch </p>
         <div className='flex flex-col md:flex-row gap-4'>
           <a className=' px-4 py-2  flex items-center gap-1 rounded-md bg-gray-700 text-white'target='_blank' rel='noreferrer' href='https://github.com/github-harshit/NetflixGPT'> <FaGithub size={"1.2rem"} />View on Github</a>
         <a className='px-4 py-2  flex items-center gap-1 rounded-md bg-blue-900 text-white' target='_blank' rel='noreferrer' href='https://netflixgpt.netlify.app/'> <IoMdCloudOutline  size={"1.2rem"} />View Live</a>
         </div>
       </div>
       <div className='border border-gray-100  dark:border-white flex flex-col gap-3 items-center px-4 py-4 rounded-md'>
         <img className=' w-[100%] object-cover rounded-sm ' src={Nike}/>
         <h1 className='text-3xl font-semibold'>Nike Store</h1>
         <div className='text-xl'>
           React, TailwindCSS, 
         </div>
         <p className='text-lg'>A UI clone of Nike official Store build using  React and Tailwind CSS. Used best practises of design and tailwind css to elevate the experience of shopping    </p>
         <div className='flex flex-col md:flex-row gap-4'>
           <a className=' px-4 py-2 flex items-center gap-1 rounded-md bg-gray-700 text-white'target='_blank' rel='noreferrer' href='https://github.com/github-harshit/Nike'> <FaGithub size={"1.2rem"} /> View on Github</a>
         <a className=' px-4 py-2 flex items-center gap-1 rounded-md bg-blue-900 text-white' target='_blank' rel='noreferrer' href='https://nike-eosin-eight.vercel.app/'> <IoMdCloudOutline  size={"1.2rem"} /> View Live</a>
         </div>
       </div>
       <div className='border border-gray-100  dark:border-white flex flex-col gap-3 items-center px-4 py-4 rounded-md'>
         <img className=' w-[100%] object-cover rounded-sm ' src={Nike}/>
         <h1 className='text-3xl font-semibold'>Shoppy Ecommerce</h1>
         <div className='text-xl'>
          Node.js,Express,MongoDB,React, Stripe
         </div>
         <p className='text-lg'>A full stack E-commerce Application for buying clothes build using MERN stack and also integrated Stripe payment gateway </p>
         <div className='flex flex-col md:flex-row gap-4'>
           <a className=' text-md font-medium px-4 py-2 flex items-center gap-1 rounded-md bg-gray-700 text-white 'target='_blank' rel='noreferrer' href='https://github.com/github-harshit/ShoppyEcommerce'> <FaGithub size={"1.2rem"} />View on Github</a>
         <a className=' text-md font-medium px-4 py-2 flex items-center gap-1 rounded-md bg-blue-900 text-white' target='_blank' rel='noreferrer' href=''> <IoMdCloudOutline  size={"1.2rem"} />View Live</a>
         </div>
       </div>
      
     </div>
    </div>
  )
}

export default MyWork