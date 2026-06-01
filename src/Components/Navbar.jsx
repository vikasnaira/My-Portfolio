import React from 'react'
import { GiMoebiusStar } from "react-icons/gi";
import Magneticbutton from './Tools/Magnetbutton';
import { Link } from "react-router-dom";
import { RxComponent1 } from "react-icons/rx";  
const Navbar = () => {
    
  return (  
    <div className='w-full fixed  backdrop-blur-sm  h-20 z-9 top-0 flex justify-between items-center px-3 '>
        <div className="name relative flex  h-15 text-white  overflow-hidden w-38 text-lg">
            <span className=' w-10  flex justify-center z-9 items-center text-lg bg-black '><GiMoebiusStar className='i' /></span>
        <button className='absolute left-13 w-fit text-lg h-full text-nowrap move'>code by Vikas Naira</button>
        </div>
        <div className="buttons text-lg gap-8 text-white hidden md:flex">
               <Link to="/"><Magneticbutton children={"Home"}/></Link>
               <Link to="/about"><Magneticbutton children={"About"}/></Link>
        </div>
            <RxComponent1 className='text-white text-xl md:hidden'/>
    </div>
  ) 
}

export default Navbar