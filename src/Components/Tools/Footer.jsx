import React from 'react'
import MagneticButton from './Magnetbutton'
import { MdArrowOutward } from "react-icons/md";
const Footer = () => {
  return (
    <article className='text-2xl  mt-40 relative'>

      <div className=' 
      absolute top-[0%] 
      left-[35%] h-100
       mix-blend-difference 
       rounded-full w-100 
       bg-blue-600/40 blur-2xl '>
      </div>



      <div className='flex flex-col md:flex-row items-center text-md px-10 font-black text-white justify-center z-2 gap-2'>
        <h1 className='md:text-7xl text-2xl text-center text-nowrap'>
          READY TO TAKE YOUR <br  className='md:block hidden'/>  <br/> IDEA TO <br className='md:block hidden'/> 
          <br />
          THE NEXT LEVEL ?
        </h1>
        <MagneticButton children={<>start <MdArrowOutward  className='md:text-3xl text-sm'/> </>} className="md:text-3xl font-normal text-black flex justify-center items-center md:gap-3  md:h-30 absolute px-2 p-0 md:-left-50 rounded-full text-sm bg-[#7AF298] gap-2 "/>
      </div>
       <div className='flex items-center text-md px-4 justify-center gap-2 mt-10'>
         <h1>{"</"}</h1>
        <hr className='w-full mt-2 bg-gray-500'/>
        <h1>{"/>"}</h1>
       </div>
    </article>
  )
}

export default Footer