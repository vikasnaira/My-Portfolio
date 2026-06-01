import React from 'react'
import MagneticButton from './Magnetbutton'
import { MdArrowOutward } from "react-icons/md";
import Lable from './Lable';
import { Code2, Sparkles, Terminal, Cpu } from 'lucide-react'

const Footer = () => {
  const techItems = [
    { text: "Get in Touch", icon: <Code2  /> },
    { text: "Contact Me ", icon: <Sparkles /> },
    { text: "Hire Me", icon: <Terminal/> }
  ];
  return (
    <article className='text-2xl  mt-40 relative'>


      <div className=' 
      absolute
      left-[25%] h-150 
       mix-blend-difference 
       rounded-full w-150 
       bg-blue-600/40 blur-2xl '>
      </div>

      <div className='flex flex-col md:flex-row items-center text-md px-10 font-black text-white justify-center z-2 gap-2'>
        <h1 className='md:text-7xl text-2xl text-center text-nowrap'>
          READY TO TAKE YOUR <br  className='md:block hidden'/>  <br/> IDEA TO <br className='md:block hidden'/> 
          <br />
          THE NEXT LEVEL ?
        </h1>
        <MagneticButton children={<><MdArrowOutward  className='md:text-2xl text-sm font-extralight'/>start </>} className="md:text-3xl font-normal md:flex-col  md:py-0  py-1 text-black flex justify-center items-center   md:h-30 absolute px-7 p-0 md:-left-50 rounded-full text-sm bg-[#7AF298] gap-2 "/>
      </div>
       <div className='flex items-center text-md px-4 justify-center gap-2 mt-10'>
         <h1>{"</"}</h1>
        <hr className='w-full mt-2 bg-gray-500'/>
        <h1>{"/>"}</h1>
       </div>



      <section>
       <Lable baseItems={techItems} className="bg-gray-900 border-white text-white h-10" text="vk  text-white md:text-2xl"  />
      </section>


    </article>
  )
}

export default Footer