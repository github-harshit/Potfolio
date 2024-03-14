import React,{useState} from 'react'; 
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { IoSunnyOutline } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";
 import { Link } from 'react-router-dom';


const Navbar = ({handleThemeSwitch, theme}) => { 

  const [showHam, setShowHam] = useState(false); 

 console.log(theme); 
  return (
    <nav className='w-full h-[5rem] md:h-[7rem]'>
        <div className=' w-full h-full flex items-center justify-center gap-40 px-14  dark:bg-black dark:text-white '>
            <div>
              <Link to={"/"}> <h3 className='font-semibold text-lg md:text-3xl mt-4 ' > Harshit Joshi </h3></Link>  

            </div>
            <ul  className={`max-md:fixed max-md:h-[100vh] max-md:top-0 max-md:right-0 max-md:bg-slate-100 dark:bg-black dark:text-white max-md:z-20
                              max-md:w-full flex flex-col gap-5 items-start p-20  md:flex-row md:justify-evenly md:items-center md:gap-10
             ${showHam ?  "max-md:translate-x-0": "max-md:translate-x-full" }`}>
                <li> <Link onClick={()=> setShowHam(false)} to="/about"  className='font-semibold text-lg md:text-xl'> About </Link> </li>
                <li> <Link onClick={()=> setShowHam(false)} to='/contact'  className='font-semibold text-lg md:text-xl' > Contact </Link> </li>
                <li> <Link  onClick={()=> setShowHam(false)} to='/myWork'  className='font-semibold text-lg md:text-xl'> My Work </Link> </li>
                <li  onClick={()=> setShowHam(false)}> <a href="/files/HarshitJoshiResumeSDE.pdf" target='_blank' rel="noopener noreferrer" className='font-semibold text-lg md:text-xl'> Resume </a> </li>
                 
              
               
            </ul>
            <div className='flex gap-5'>
           
            <button onClick={handleThemeSwitch} className='w-6 h-6 object-fit  '> {theme==="dark"?  <IoSunnyOutline size={"1.5rem"}/> : <FaMoon size={"1.5rem"} />} </button>
             {showHam ? <IoMdClose size={"1.5rem"}  onClick={()=> setShowHam(!showHam)} className='md:hidden z-40'/>: <GiHamburgerMenu size={"1.5rem"} onClick={()=> setShowHam(!showHam)} className='md:hidden z-40'/>}
            

            </div>
           

        </div>
    </nav>
  )
}

export default Navbar