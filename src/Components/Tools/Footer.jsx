import React from 'react'
import Magneticbutton from './Magnetbutton'
import { MdArrowOutward } from "react-icons/md";
import Lable from './Lable';
import { Code2, Sparkles, Terminal, Cpu } from 'lucide-react'
import { motion } from 'framer-motion';

const Footer = () => {
  const techItems = [
    { text: "Get in Touch", icon: <Code2  /> },
    { text: "Contact Me ", icon: <Sparkles /> },
    { text: "Hire Me", icon: <Terminal/> }
  ];
  return (
    <article className='mt-10 md:mt-20  relative'>

      <div className=' 
      absolute
       lg:-top-10 md:left-40 left-10 h-150 
       mix-blend-difference 
       lg:left-90
       rounded-full w-150 
       bg-blue-600/40 blur-2xl '>
      </div>

      <div className='flex  flex-col items-center text-md  font-black text-white  z-2 '>


        <motion.h1
        initial={{ y:40 }}
         whileInView={{ opacity: 1, y:0 }}
         viewport={{ once:false}}
         transition={{ duration: 0.5}}
        className='md:text-5xl text-xl text-center text-nowrap vk font-medium'>
          READY TO TAKE YOUR 
        </motion.h1>
          <br className='hidden md:block'/>


        <motion.h1
        initial={{ opacity: 0, y:40 }}
         whileInView={{ opacity: 1, y:0 }}
         viewport={{ once:false}}
         transition={{ duration: 0.5 }}
        className='md:text-5xl text-xl text-center text-nowrap md:mt-6 vk font-medium'>
           IDEA TO 
          </motion.h1>
          <br className='hidden md:block'/>


        <motion.h1
        initial={{ opacity: 0, y:40 }}
        whileInView={{ opacity: 1, y:0 }}
        viewport={{ once:false}}
        transition={{ duration: 0.5 }}
        className='md:text-5xl text-xl text-center text-nowrap vk font-medium'>

          THE NEXT LEVEL ?
        </motion.h1>
      <a href="#Contact2">
        <Magneticbutton
        initial={{ opacity: 0, scale:0.1, }}
        whileInView={{ opacity: 1, scale:1, }}
        viewport={{ once:false}}
        transition={{ duration: 0.8 }}
        children={<><MdArrowOutward className='md:text-xl text-sm font-extralight'/>start </>} 
        className="md:text-3xl font-normal md:flex-col md:mr-20 mt-10  
        text-black flex justify-center
        items-center   md:h-30 md:-translate-y-55 md:translate-x-70
        rounded-full text-sm
         bg-[#7AF298] gap-2 md:px-5 vk px-3 py-2 md:mt-12 
         "/>
         </a>
      </div>
       <div className='flex items-center text-md px-4 justify-center gap-2 mt-10'>
         <h1>{"</"}</h1>
        <hr className='w-full mt-2 bg-gray-500'/>
        <h1>{"/>"}</h1>
       </div>


      <section className='mt-10 overflow-visible'>
       <Lable baseItems={techItems} className="bg-red-800 -rotate-6 border-white text-white h-10" text="vk  text-white md:text-2xl"  />
      </section>


    </article>
  )
}

export default Footer