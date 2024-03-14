import "./App.css"
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar'
import Intro from './components/Intro/Intro';
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
 import MyWork from "./components/MyWork/MyWork";
import {BrowserRouter, Routes, Route} from "react-router-dom"
function App() {
 const[theme, setTheme]= useState("dark" );
 useEffect(()=>{
   if(theme==="dark"){
    document.documentElement.classList.add("dark"); 
   }else{
     document.documentElement.classList.remove("dark")
   }
 
   
 },  [theme])

 const handleThemeSwitch = ()=>{
   setTheme(theme==="dark"? "light": "dark")
 }

  return (
    <>
   
    <BrowserRouter>
    <Navbar handleThemeSwitch= {handleThemeSwitch} theme={theme} />
     <Routes>
      <Route path="/" element= {<Intro/>}/>
      <Route path="/about" element= {<About/>}/>
      <Route path="/contact" element = {<Contact/>}/>
       <Route path="/myWork" element= {<MyWork/>}/>
     </Routes>
  

     
     
       
    </BrowserRouter>
    </>
  )
}

export default App
