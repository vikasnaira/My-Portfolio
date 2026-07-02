import React from 'react'
import { GiMoebiusStar } from "react-icons/gi";
import Magneticbutton from './Tools/Magnetbutton';
const Navbar = () => {
    
  return (  
    <div className='w-full fixed  backdrop-blur-sm  h-20 z-999 top-0 flex justify-between items-center px-3 '>
        <div className="name relative flex  h-15 text-white  overflow-hidden w-38 text-lg">
            <span className=' w-10  flex justify-center z-9 items-center text-lg md:bg-black '><GiMoebiusStar className='i' /></span>
        <button className='absolute left-13 w-fit text-lg h-full text-nowrap move'>code by Vikas Naira</button>
        </div>
        <div className="buttons text-lg gap-8 text-white hidden md:flex px-5">

                <a href="#Hero">
                <Magneticbutton className={"text-sm vk text-gray-300"} children={"HOME"}/>
                </a>

                <a href="#Projects">
               <Magneticbutton  className={"text-sm vk text-gray-300"} children={"WORK"}/>
                </a>

                <a href="#Contact">
               <Magneticbutton className={"text-sm vk text-gray-300"} children={"CONTACT "}/>
                </a>

                <a href="#About">
               <Magneticbutton className={"text-sm vk text-gray-300"} children={"ABOUT"}/>
                </a>

            
                <a href="#Resume">
               <Magneticbutton className={"text-sm vk text-gray-300"} children={"RESUME"}/>
                </a>

               
        </div>
           
    </div>
  ) 
}

export default Navbar